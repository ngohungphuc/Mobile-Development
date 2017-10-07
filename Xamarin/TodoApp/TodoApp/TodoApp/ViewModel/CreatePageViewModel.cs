using System;
using TodoApp.Model;
using TodoApp.View;

namespace TodoApp.ViewModel
{
    public class CreatePageViewModel
    {
        public void AddTask(
            string todo,
            string priority,
            DateTime dueDate,
            int hour,
            int minute,
            int second,
            int updateId,
            bool isDeleted)
        {
            var newTodo = new TodoItem
            {
                TaskName = todo,
                Priority = priority,
                DueDate = SetDueDate(dueDate, hour, minute, second),
                IsDeleted = isDeleted,
                Id = updateId
            };

            App.Database.SaveTodo(newTodo);
        }

        public DateTime SetDueDate(DateTime dateDate, int timeHours, int timeMinutes, int timeSeconds)
        {
            DateTime val = new DateTime(dateDate.Year, dateDate.Month, dateDate.Day, timeHours, timeMinutes, timeSeconds);
            return val;
        }

    }
}
