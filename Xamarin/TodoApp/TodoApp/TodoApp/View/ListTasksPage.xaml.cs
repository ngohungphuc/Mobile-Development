using System.Collections.Generic;
using TodoApp.Model;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace TodoApp.View
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class ListTasksPage : ContentPage
    {
        public List<TodoItem> TodoItems { get; set; }
        public ListTasksPage(List<TodoItem> items)
        {
            TodoItems = items;
            BindingContext = this;
            InitializeComponent();
        }

        private void OnSelected(object sender, ItemTappedEventArgs e)
        {
            var toDoItem = e.Item as TodoItem;
            DisplayAlert("Chosen", $"{toDoItem.TaskName} was selected", "Ok");
        }
    }
}