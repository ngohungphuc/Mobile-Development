using SQLite;
using TodoApp.Model;
using Xamarin.Forms;

namespace TodoApp.Data
{
    public class TodoDatabase
    {
        private SQLiteConnection database;
        static  object locker = new object();

        public TodoDatabase()
        {
            database = DependencyService.Get<ISqLite>().GetConnection();
            database.CreateTable<TodoItem>();
        }

        public int SaveToDo(TodoItem item)
        {
            lock (locker)
            {
                
            }
        }
    }
}
