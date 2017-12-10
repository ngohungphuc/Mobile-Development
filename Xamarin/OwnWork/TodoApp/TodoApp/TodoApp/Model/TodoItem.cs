using System;
using SQLite;

namespace TodoApp.Model
{
    public class TodoItem
    {
        [PrimaryKey,AutoIncrement]
        public int Id { get; set; }
        public string TaskName { get; set; }
        public string Priority { get; set; }
        public DateTime DueDate { get; set; }
        public bool IsDeleted { get; set; }

    }
}
