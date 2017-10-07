using TodoApp.Data;
using Xamarin.Forms;

namespace TodoApp.View
{
    public partial class App : Application
    {
        private static TodoDatabase database;

        public static TodoDatabase Database => database ?? (database = new TodoDatabase());

        public App()
        {
            InitializeComponent();

            MainPage = new NavigationPage(new CreatePage());
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
