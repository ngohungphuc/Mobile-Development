using System;
using System.Windows.Input;
using Xamarin.Forms;

namespace Message
{
    public partial class MainPage
    {
        public class MainPageViewModel
        {
            public ICommand ButtonClickCommand { get; set; }

            public MainPageViewModel()
            {
                 ButtonClickCommand = new Command(HandleButtonClick);
            }

            private void HandleButtonClick()
            {
                //publish  message in view model
                MessagingCenter.Send<MainPageViewModel>(this, "ButtonClicked");
            }
        }
    }
}
