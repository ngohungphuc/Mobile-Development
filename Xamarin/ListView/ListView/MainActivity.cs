using System.Collections.Generic;
using Android.App;
using Android.OS;
using Android.Widget;
namespace ListView
{
    [Activity(Label = "ListView", MainLauncher = true)]
    public class MainActivity : Activity
    {
        private List<Person> mItems;
        private Android.Widget.ListView mListView;
        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.Main);
            mListView = FindViewById<Android.Widget.ListView>(Resource.Id.myListView);


            mItems = new List<Person>
            {
                new Person() {FirstName = "Tony", LastName = "Hudson", Age = "22", Gender = "Male"}
            };
            // bind an array to a list using an ArrayAdapter
            //ArrayAdapter<string> adapter = new ArrayAdapter<string>(this, Android.Resource.Layout.SimpleListItem1, mItems);
            MyListViewAdapter adapter = new MyListViewAdapter(this, mItems);
            mListView.Adapter = adapter;
            mListView.ItemClick += mListView_ItemClick;
            //mListView.ItemLongClick += mListView_ItemClick;
        }

        private void mListView_ItemClick(object sender, AdapterView.ItemClickEventArgs e)
        {
            throw new System.NotImplementedException();
        }
    }
}

