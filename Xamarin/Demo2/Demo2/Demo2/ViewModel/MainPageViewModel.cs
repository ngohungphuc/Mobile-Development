
using ListView.Models;
using System.Collections.ObjectModel;

namespace ListView.ViewModel
{
    public class MainPageViewModel
    {
        public ObservableCollection<Person> People { get; set; } = new ObservableCollection<Person>();

        public MainPageViewModel()
        {
            for (int i = 0; i < 5; i++)
            {
                Person person = new Person();
                person.Name = "Tony" + i.ToString();
                person.Address = i.ToString() + "main street";
                person.ImageSource = "man" + i.ToString() + ".jpeg";
                People.Add(person);
            }

        }
    }
}
