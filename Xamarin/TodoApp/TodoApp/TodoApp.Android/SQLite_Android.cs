using System.IO;
using TodoApp.Data;
using TodoApp.Droid;

[assembly:Xamarin.Forms.Dependency(typeof(SqLiteAndroid))]
namespace TodoApp.Droid
{
    public class SqLiteAndroid: ISqLite
    {
        public SqLiteAndroid()
        {
            
        }

        public SQLite.SQLiteConnection GetConnection()
        {
            var path = "D:/Source Code/Mobile-Development/Xamarin/Db/Todo.db";
            File.Open(path, FileMode.OpenOrCreate);
            var conn = new SQLite.SQLiteConnection(path);
            return conn;
        }
    }
}