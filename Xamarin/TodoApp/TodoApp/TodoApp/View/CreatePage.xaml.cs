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
        private CreatePageViewModel vm;
        private int updateId = 0;
        public CreatePage(int id)
        {
            TodoItem todoItem = App.Database.GetTodo(id);
            Todo.Text = todoItem.TaskName;
            Priority.Text = todoItem.Priority;
            Date.Date = todoItem.DueDate;
            Time.Time = todoItem.DueDate.TimeOfDay;
            updateId = id;
        }

        public CreatePage()
        {
            vm = new CreatePageViewModel();
            BindingContext = vm;
            InitializeComponent();
        }

        private void OnSave(object sender, EventArgs e)
        {
            vm.AddTask(
                Todo.Text,
                Priority.Text,
                Date.Date,
                Time.Time.Hours,
                Time.Time.Minutes,
                Time.Time.Seconds,
                updateId,
                false);
           
            Clear();
        }

        private void OnCancel(object sender, EventArgs e)
        {

        }

        private void OnReview(object sender, EventArgs e)
        {
            Clear();
            Navigation.PushAsync(new ListTasksPage());
        }

        private void Clear()
        {
            Todo.Text = Priority.Text = string.Empty;
            Time.Time = new TimeSpan(
                DateTime.Now.Hour,
                DateTime.Now.Minute,
                DateTime.Now.Second);
        }
    }
}