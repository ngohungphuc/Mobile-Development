using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace Message
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
            BindingContext = new MainPageViewModel();
            
            MessagingCenter.Subscribe<MainPageViewModel>( new MainPageViewModel(), "ButtonClicked", (sender) =>
            {
                DisplayAlert("Message", "Button Clicked", "Ok");
            });
        }
    }
}
