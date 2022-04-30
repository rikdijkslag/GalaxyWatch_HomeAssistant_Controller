using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Essentials;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace GalaxyWatch_HomeAssistant_Controller
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();
            
            //Check if it is the first login
            if (Preferences.Get("FirstLogin", true) == false)
            {
                MainPage = new GalaxyWatch_HomeAssistant_Controller.MainPage();
            } else
            {
                MainPage = new GalaxyWatch_HomeAssistant_Controller.ConnectionDataPage();
            }

#if DEBUG
            TizenHotReloader.HotReloader.Open(this);
#endif
        }

        protected override void OnStart()
        {
            // Handle when your app starts
        }

        protected override void OnSleep()
        {
            // Handle when your app sleeps
        }

        protected override void OnResume()
        {
            // Handle when your app resumes
        }
    }
}

