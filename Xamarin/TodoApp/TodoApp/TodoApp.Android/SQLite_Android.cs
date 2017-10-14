using System;
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
            //var sqliteFilename = "ToDo.db";
            //string documentsPath = Environment.GetFolderPath(Environment.SpecialFolder.Personal); // Documents folder
            //string libraryPath = Path.Combine(documentsPath, "..", "Sqlite"); // Library folder
            //var path = Path.Combine(libraryPath, sqliteFilename);

            var path = @"D:\Sqlite\Todo.db";
            File.Open(path, FileMode.OpenOrCreate);
            var conn = new SQLite.SQLiteConnection(path);
            return conn;
        }
    }
}