using System;
using System.Collections.Generic;
using TodoApp.Model;
using TodoApp.ViewModel;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace TodoApp.View
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class CreatePage : ContentPage
    {
        public List<TodoItem> todoItems;
        private CreatePageViewModel vm;
        public CreatePage()
        {
            todoItems = new List<TodoItem>();
            vm = new CreatePageViewModel();
            BindingContext = vm;
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
            Clear();
            Navigation.PushAsync(new ListTasksPage(todoItems));
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