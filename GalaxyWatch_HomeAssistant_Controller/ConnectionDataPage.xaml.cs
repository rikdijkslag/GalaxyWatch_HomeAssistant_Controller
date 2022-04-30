using System;
using System.IO;
using System.Net;
using Xamarin.Essentials;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace GalaxyWatch_HomeAssistant_Controller
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class ConnectionDataPage : ContentPage
    {
        public ConnectionDataPage()
        {
            InitializeComponent();

            //set entry text to the the data that is already made if it is not the first login
            if (Preferences.Get("FirstLogin", false) == false)
            {
                TbxIpAdress.Text = Preferences.Get("Ip", "");
                TbxPort.Text = Preferences.Get("Port", "8123");
                TbxApiKey.Text = Preferences.Get("Key", "");
            }
        }



        private async void TbxApiKey_TextChanged(object sender, EventArgs e)
        {
                TbxApiKey.CursorPosition = TbxApiKey.Text.Length;
        }


        private void BtnContinu_Clicked(object sender, EventArgs e)
        {
            if (GetConnection() == true)
            {
                if (TbxIpAdress.Text != "" && TbxPort.Text != "" && TbxApiKey.Text != "")
                {
                    //if nothing is empty
                    Preferences.Set("Ip", TbxIpAdress.Text);
                    Preferences.Set("Port", TbxPort.Text);
                    Preferences.Set("ApiKey", TbxApiKey.Text);
                    Preferences.Set("FirstLogin", false);
                    Navigation.PushModalAsync(new MainPage());
                }
                else
                {
                    //if one or more entrys empty
                    DisplayAlert("Alert", "Je hebt niet alle velden ingevult", "OK");
                }
            }
            else
            {
                DisplayAlert("Alert", "Connection Failed", "OK");
            }
        }

        bool GetConnection()
        {
            try
            {
                string ip = TbxIpAdress.Text;
                string port = TbxPort.Text;

                //the homeassistant url
                var url = "http://" + ip + ":" + port + "/api/states";

                var httpRequest = (HttpWebRequest)WebRequest.Create(url);

                //api token in header
                httpRequest.Headers["Authorization"] = "Bearer " + TbxApiKey.Text;
                httpRequest.ContentType = "application/json";

                //Request json with all entitys from api
                var httpResponse = (HttpWebResponse)httpRequest.GetResponse();
                using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                {
                    var result = streamReader.ReadToEnd();
                    return true;
                }
            }
            catch
            {
                return false;
            }

        }
    }
}