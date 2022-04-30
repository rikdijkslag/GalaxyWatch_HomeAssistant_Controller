using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Essentials;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace GalaxyWatch_HomeAssistant_Controller
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class SettingsPage : ContentPage
    {
        public SettingsPage()
        {
            InitializeComponent();
        }

        List<states> lightList = new List<states>();

        private void RemoveLights_Clicked(object sender, EventArgs e)
        {
            Preferences.Set("RemoveMode", true);

            Navigation.PushModalAsync(new MainPage());
        }

        private void AddLights_Clicked(object sender, EventArgs e)
        {
            SettingView.IsVisible = false;
            AddLightView.IsVisible = true;
        }

        private void ImportLights_Clicked(object sender, EventArgs e)
        {
            Preferences.Set("lightJson", "");

            Navigation.PushModalAsync(new SettingsPage());
        }

        private void ConnectionData_Clicked(object sender, EventArgs e)
        {
            Navigation.PushModalAsync(new ConnectionDataPage());
        }

        private void BtnBack_Clicked(object sender, EventArgs e)
        {
            Navigation.PushModalAsync(new MainPage());
        }

        private void BtnAddLight_Clicked(object sender, EventArgs e)
        {
            string Entityid = TbxEntityid.Text;

            //check if entry/textbox is empty
            if (TbxEntityid.Text != string.Empty)
            {
                string NewEntityJson = "";
                lightList = JsonConvert.DeserializeObject<List<states>>(Preferences.Get("lightJson", ""));

                try
                {
                    string ip = Preferences.Get("Ip", "");
                    string port = Preferences.Get("Port", "8123");

                    //the homeassistant url
                    var url = "http://" + ip + ":" + port + "/api/states/" + Entityid + "";

                    var httpRequest = (HttpWebRequest)WebRequest.Create(url);

                    //api token in header
                    httpRequest.Headers["Authorization"] = "Bearer " + Preferences.Get("ApiKey", "");
                    httpRequest.ContentType = "application/json";

                    //Request json with all entitys from api
                    var httpResponse = (HttpWebResponse)httpRequest.GetResponse();
                    using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                    {
                        var result = streamReader.ReadToEnd();
                        NewEntityJson = result;
                    }


                    states NewEntityObject = JsonConvert.DeserializeObject<states>(NewEntityJson);

                    string[] EntetyIdSplited = NewEntityObject.entity_id.Split(".");

                    //check if the first word of the entity is "light"
                    if (EntetyIdSplited[0] != "light")
                    {
                        //if the entety isn't a light
                        DisplayAlert("Alert", "This entity isn't a light", "OK");
                    }
                    else
                    {
                        //if the entity is a light
                        lightList.Add(NewEntityObject);
                        Preferences.Set("lightJson", JsonConvert.SerializeObject(lightList));
                        AddLightView.IsVisible = false;
                        DisplayAlert("Succes", "You added " + NewEntityObject.attributes.friendly_name, "OK");
                        SettingView.IsVisible = true;

                    }
                }
                catch
                {

                    DisplayAlert("Alert", "Can't find entity id", "OK");
                }







            }
            else
            {
                DisplayAlert("Alert", "There is no text", "OK");
            }
        }

        private class states
        {
            public string entity_id { get; set; }
            public string state { get; set; }
            public Attributes attributes { get; set; }
        }

        private class Attributes
        {
            public string min_mireds { get; set; }
            public string max_mireds { get; set; }
            public string[] supported_color_modes { get; set; }
            public string friendly_name { get; set; }
            public string supported_features { get; set; }
        }
    }
}

//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxNzcwNjc1Y2E0MzA0Njk0YTUwOTlkMzllYjM1Y2ZlMyIsImlhdCI6MTY1MDg5OTM1MywiZXhwIjoxOTY2MjU5MzUzfQ.7W5BGIMXC8tkUHJOsOcc_FmAZ8JsDpGaHqIntkj4l2o