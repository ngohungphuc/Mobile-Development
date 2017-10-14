using System.Collections.Generic;
using Android.App;
using Android.OS;
using Android.Widget;
namespace ListView
{
    [Activity(Label = "ListView", MainLauncher = true)]
    public class MainActivity : Activity
    {
        private List<string> mItems;
        private Android.Widget.ListView mListView;
        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.Main);
            mListView = FindViewById<Android.Widget.ListView>(Resource.Id.myListView);
       

            mItems = new List<string> { "Bob", "Tom", "Jim" };
            // bind an array to a list using an ArrayAdapter
            ArrayAdapter<string> adapter = new ArrayAdapter<string>(this, Android.Resource.Layout.SimpleListItem1, mItems);
            mListView.Adapter = adapter;
        }
    }
}

