using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using Xamarin.Essentials;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace GalaxyWatch_HomeAssistant_Controller
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();

            MakelightList();

            for (int i = 0; i < lightList.Count; i++)
            {
                AddLightButton(lightList[i], i);
            }

            RefreshBulbStatus();

            //Check if remove mode is enabled
            if (Preferences.Get("RemoveMode", false) == true)
            {
                StartRemoveMode();
            }
        }

        //The list of all lights
        List<states> lightList = new List<states>();
        public class states
        {
            public string entity_id { get; set; }
            public string state { get; set; }
            public Attributes attributes { get; set; }
        }

        public class Attributes
        {
            public string min_mireds { get; set; }
            public string max_mireds { get; set; }
            public string[] supported_color_modes { get; set; }
            public string friendly_name { get; set; }
            public string supported_features { get; set; }
        }

        void MakelightList()
        {
            //Deserialize json to list
            string json = getApiJson();
            lightList = JsonConvert.DeserializeObject<List<states>>(json);

            //remove every entity in the list that isn't a light
            for (int i = lightList.Count - 1; i >= 0; i--)
            {
                string[] EntetyIdSplited = lightList[i].entity_id.Split(".");

                //check if the first word of the entity is "light"
                if (EntetyIdSplited[0] != "light")
                {
                    //if the entety isn't a light
                    lightList.RemoveAt(i);
                }
                else
                {
                    //if the entity is a light

                    if (lightList[i].state != "on")
                    {
                        lightList[i].state = "off";
                    }
                }
            }

            Preferences.Set("lightJson", JsonConvert.SerializeObject(lightList));
        }

        public string getApiJson()
        {
            if (Preferences.Get("lightJson", "") == "")
            {
                string ip = Preferences.Get("Ip", "");
                string port = Preferences.Get("Port", "8123");

                //the homeassistant url
                var url = "http://" + ip + ":" + port + "/api/states";

                var httpRequest = (HttpWebRequest)WebRequest.Create(url);

                //api token in header
                httpRequest.Headers["Authorization"] = "Bearer " + Preferences.Get("ApiKey", "");
                httpRequest.ContentType = "application/json";

                //Request json with all entitys from api
                var httpResponse = (HttpWebResponse)httpRequest.GetResponse();
                using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                {
                    return streamReader.ReadToEnd();
                }
            }
            else
            {
                return Preferences.Get("lightJson", "");
            }
        }

        private void StartRemoveMode()
        {
            ButtonsToDelete.Clear();

            foreach (states state in lightList)
            {
                ButtonsToDelete.Add(false);
            }

            //set the button to remove mode
            BtnSettings.ClassId = "delete";
            BtnSettings.Source = "garbage_can.png";

            LightListView.IsVisible = true;
            DeleteModeIsEnable = true;
            Preferences.Set("RemoveMode", false);
        }

        List<ImageButton> BulbStatusList = new List<ImageButton>();

        private void AddLightButton(states state, int counter)
        {
            StackLayout stackLayout = new StackLayout()
            {
                Margin = new Thickness(0, 0, 0, 10),
                HeightRequest = 60,
                HorizontalOptions = LayoutOptions.Fill,
                Orientation = StackOrientation.Horizontal,
                FlowDirection = FlowDirection.LeftToRight,
            };

            ImageButton ImgBtnLightStatus = new ImageButton()
            {
                Margin = new Thickness(20, 0, 0, 0),
                HeightRequest = 20,
                Source = state.state + ".png",
                WidthRequest = 60,
            };

            Button BtnLightName = new Button();

            BtnLightName = new Button();
            BtnLightName.BackgroundColor = Color.Transparent;
            BtnLightName.FontSize = 23;
            BtnLightName.HeightRequest = 20;
            BtnLightName.Text = state.attributes.friendly_name;
            BtnLightName.HorizontalOptions = LayoutOptions.Fill;
            BtnLightName.AutomationId = counter.ToString();
            BtnLightName.Clicked += BtnLightName_Clicked;

            stackLayout.Children.Add(ImgBtnLightStatus);
            stackLayout.Children.Add(BtnLightName);
            BulbStatusList.Add(ImgBtnLightStatus);

            LightListLayout.Children.Add(stackLayout);
        }


        private void ToggleLight(string EntityID)
        {
            string ip = Preferences.Get("Ip", "");
            string port = Preferences.Get("Port", "8123");

            //Here the light can be toggled
            var url = "http://" + ip + ":" + port + "/api/services/light/toggle";

            var httpRequest = (HttpWebRequest)WebRequest.Create(url);
            httpRequest.Method = "POST";

            httpRequest.Headers["Authorization"] = "Bearer " + Preferences.Get("ApiKey", "");
            httpRequest.ContentType = "application/json";

            //Set emtityid in content
            var data = @"{""entity_id"": """ + EntityID + "\"}";

            using (var streamWriter = new StreamWriter(httpRequest.GetRequestStream()))
            {
                streamWriter.Write(data);
            }

            var httpResponse = (HttpWebResponse)httpRequest.GetResponse();
            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                var result = streamReader.ReadToEnd();
            }
        }

        bool DeleteModeIsEnable = false;
        List<bool> ButtonsToDelete = new List<bool>();

        private void BtnLightName_Clicked(object sender, EventArgs e)
        {
            var button = (Button)sender;

            if (DeleteModeIsEnable == false)
            {
                ToggleLight(lightList[Convert.ToInt32(button.AutomationId)].entity_id);
                RefreshBulbStatus();
            }
            else
            {
                //when build mode is enabled
                if (button.BackgroundColor == Color.Red)
                {
                    ButtonsToDelete[Convert.ToInt32(button.AutomationId)] = false;
                    button.BackgroundColor = Color.Transparent;
                }
                else
                {
                    ButtonsToDelete[Convert.ToInt32(button.AutomationId)] = true;
                    button.BackgroundColor = Color.Red;
                }
            }
        }

        private void BtnSettings_Clicked(object sender, EventArgs e)
        {
            var button = (ImageButton)sender;

            switch (button.ClassId)
            {
                case "setting":
                    Navigation.PushModalAsync(new SettingsPage());
                    break;
                case "delete":
                    //this happened when remove mode is enabled

                    DeleteModeIsEnable = false;

                    int RemoveCount = 0;

                    //for loop to check lights to dele
                    for (int i = lightList.Count - 1; i >= 0; i--)
                    {
                        if (ButtonsToDelete[i] == true)
                        {
                            //if the ligjt must be deleted
                            lightList.RemoveAt(i);
                            RemoveCount++;
                        }
                    }

                    //Show remove message
                    if (RemoveCount > 1)
                    {
                        DisplayAlert("Succes", "You have removed " + RemoveCount.ToString() + " lights", "OK");
                    }
                    else if (RemoveCount == 1)
                    {
                        DisplayAlert("Succes", "You have removed " + RemoveCount.ToString() + " light", "OK");
                    }

                    //Change lightJson variable to the new list
                    Preferences.Set("lightJson", JsonConvert.SerializeObject(lightList));

                    //refresh the light list on the screen
                    LightListLayout.Children.Clear();
                    BulbStatusList.Clear();

                    for (int i = 0; i < lightList.Count; i++)
                    {
                        AddLightButton(lightList[i], i);
                    }

                    //return settomgs button id and picture to original state
                    button.ClassId = "setting";
                    BtnSettings.Source = "setting.png";

                    break;
                default:
                    break;
            }
        }

        void RefreshBulbStatus()
        {
            for (int i = 0; i < lightList.Count; i++)
            {
                //Check if light is on or off
                if (LightIsOn(lightList[i].entity_id) == true)
                {
                    BulbStatusList[i].Source = "on.png";
                }
                else if (LightIsOn(lightList[i].entity_id) == false)
                {
                    BulbStatusList[i].Source = "off.png";
                }
            }
        }

        bool LightIsOn(string EntityId)
        {
            string ip = Preferences.Get("Ip", "");
            string port = Preferences.Get("Port", "8123");

            //the homeassistant url
            var url = "http://" + ip + ":" + port + "/api/states/" + EntityId + "";

            var httpRequest = (HttpWebRequest)WebRequest.Create(url);

            //api token in header
            httpRequest.Headers["Authorization"] = "Bearer " + Preferences.Get("ApiKey", "");
            httpRequest.ContentType = "application/json";

            //Request json with all entitys from api
            var httpResponse = (HttpWebResponse)httpRequest.GetResponse();
            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                var result = streamReader.ReadToEnd();

                states state = JsonConvert.DeserializeObject<states>(result);

                if (state.state == "on")
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
    }
}
/* 
 
 
 
 
 
 
 eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxNzcwNjc1Y2E0MzA0Njk0YTUwOTlkMzllYjM1Y2ZlMyIsImlhdCI6MTY1MDg5OTM1MywiZXhwIjoxOTY2MjU5MzUzfQ.7W5BGIMXC8tkUHJOsOcc_FmAZ8JsDpGaHqIntkj4l2o
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 */