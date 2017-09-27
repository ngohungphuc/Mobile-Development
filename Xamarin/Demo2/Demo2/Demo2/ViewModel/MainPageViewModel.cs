
using ListView.Models;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
                People.Add(person);
            }

        }
    }
}
