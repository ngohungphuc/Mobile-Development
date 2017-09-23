using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using Demo.Annotations;
using Xamarin.Forms;

namespace Demo.ViewModel
{
    public class MainPageViewModel : INotifyPropertyChanged
    {
        private string labelText = "Hello";

        public string LabelText
        {
            get { return labelText; }
            set
            {
                labelText = value;
                RaisePropertyChanged();
            }
        }
        public string Prompt { get; set; }
        public string Name { get; set; }

        public MainPageViewModel()
        {
            Prompt = "Full name";
            Name = "Tony Hudson";
        }

        private Command changeTextCommand;

        public Command ChangeTextCommand
        {
            get
            {
                return changeTextCommand ?? (changeTextCommand = new Command(() =>
                {
                    LabelText = " Goodbye";
                }));
            }
        }

        public event PropertyChangedEventHandler PropertyChanged;

        protected void RaisePropertyChanged([CallerMemberName] string caller = "")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(caller));
        }
    }
}
