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

namespace WebRequestTutorial
{
    class Contact
    {
        public string Name { get; set; }
        public string Number { get; set; }
        public byte [] Image {get; set;}

    }
}