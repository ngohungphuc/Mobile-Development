
using ListView.Models;
using System.Collections.ObjectModel;

namespace ListView.ViewModel
{
    public class MainPageViewModel
    {
        public ObservableCollection<Person> People { get; set; } = new ObservableCollection<Person>();

        public MainPageViewModel()
        {
            for (var i = 1; i <= 5; i++)
            {
                var person = new Person
                {
                    FirstName = "Tony",
                    LastName = "Hudson" + i,
                    Address = i + "main street",
                    ImageSource = "man" + i + ".jpeg"
                };
                People.Add(person);
            }

        }
    }
}
