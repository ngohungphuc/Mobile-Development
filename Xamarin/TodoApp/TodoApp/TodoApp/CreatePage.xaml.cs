using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace TodoApp
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class CreatePage : ContentPage
    {
        public List<TodoItem> todoItems;
        public CreatePage()
        {
            todoItems = new List<TodoItem>();
            InitializeComponent();
        }

        private void OnSave(object sender, EventArgs e)
        {
            todoItems.Add(
                new TodoItem(
                    Todo.Text,
                    Priority.Text,
                    SetDueDate(
                        Date.Date,
                        Time.Time.Hours,
                        Time.Time.Minutes,
                        Time.Time.Seconds
                        ),
                    false
                    ));
            Clear();
        }

        private void OnCancel(object sender, EventArgs e)
        {

        }

        private void OnReview(object sender, EventArgs e)
        {
            var tempList = todoItems;
            Clear();
        }

        private void Clear()
        {
            Todo.Text = Priority.Text = string.Empty;
            Time.Time = new TimeSpan(
                DateTime.Now.Hour,
                DateTime.Now.Minute,
                DateTime.Now.Second);
        }

        private DateTime SetDueDate(DateTime dateDate, int timeHours, int timeMinutes, int timeSeconds)
        {
            DateTime val = new DateTime(dateDate.Year, dateDate.Month, dateDate.Day, timeHours, timeMinutes, timeSeconds);
            return val;
        }

    }
}