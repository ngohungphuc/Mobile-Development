using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SQLite;
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
