using System.Collections.Generic;
using TodoApp.Model;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace TodoApp.View
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class ListTasksPage : ContentPage
    {
        public ListTasksPage()
        {
            InitializeComponent();
        }

        private void OnSelected(object sender, ItemTappedEventArgs e)
        {
            var toDoItem = e.Item as TodoItem;
            DisplayAlert("Chosen", $"{toDoItem.TaskName} was selected", "Ok");
        }

        protected override void OnAppearing()
        {
            base.OnAppearing();
            ToDoList.ItemsSource = App.Database.GetTodos();
        }
    }
}