using System.Collections;
using System.Linq;
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

        public TodoItem GetTodo(int id)
        {
            lock (locker)
            {
                return database.Table<TodoItem>().FirstOrDefault(c => c.Id == id);
            }

        }

        public int SaveTodo(TodoItem item)
        {
            lock (locker)
            {
                if (item.Id != 0)
                {
                    database.Update(item);
                    return item.Id;
                }
                return database.Insert(item);
            }
        }

        public IEnumerable GetTodos()
        {
            lock (locker)
            {
                return database.Table<TodoItem>().ToList();
            }
        }
    }
}
