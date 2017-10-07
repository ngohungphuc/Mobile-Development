using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Android.App;
using Android.Content;
using Android.OS;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using System.IO;
using SQLite.Net;
using TodoApp.Data;

namespace TodoApp.Droid
{
    public class SqLiteAndroid: ISqLite
    {
        public SqLiteAndroid()
        {
            
        }

        public SQLite.SQLiteConnection GetConnection()
        {
            var path = "/Db/Todo.db";
            File.Open(path, FileMode.OpenOrCreate);
            var conn = new SQLite.SQLiteConnection(path);
            return conn;
        }
    }
}