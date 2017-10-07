using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoApp
{
    public class TodoItem
    {
        public string TaskName { get; set; }
        public string Priority { get; set; }
        public DateTime DueDate { get; set; }
        public bool IsDeleted { get; set; }

        public TodoItem(string taskName, string priority, DateTime dueDate, bool isDeleted)
        {
            TaskName = taskName;
            Priority = priority;
            DueDate = dueDate;
            IsDeleted = isDeleted;
        }
    }
}
