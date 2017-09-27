using ListView.Models;
using ListView.ViewModel;
using Xamarin.Forms;

namespace Demo2
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
            BindingContext = new MainPageViewModel();
        }

        private void ListView_OnItemSelected(object sender, SelectedItemChangedEventArgs e)
        {
            if (e.SelectedItem == null)
            {
                return;
            }

            var person = e.SelectedItem as Person;
            DisplayAlert("Selected", person.FirstName, "OK");
        }
    }
}
