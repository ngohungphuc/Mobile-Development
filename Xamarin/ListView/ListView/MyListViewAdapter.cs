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

namespace ListView
{
    class MyListViewAdapter : BaseAdapter<Person>
    {
        private List<Person> mItems;
        private Context mContext;

        public MyListViewAdapter(Context context, List<Person> items)
        {
            mItems = items;
            mContext = context;
        }

        public override long GetItemId(int position)
        {
            return position;
        }

        public override View GetView(int position, View convertView, ViewGroup parent)
        {
            View row = convertView;
            if (row == null)
            {
                row = LayoutInflater.From(mContext).Inflate(Resource.Layout.listview_row, null, false);
            }

            TextView txtName = row.FindViewById<TextView>(Resource.Id.txtName);
            txtName.Text = mItems[position].FirstName;
            TextView txtLastName = row.FindViewById<TextView>(Resource.Id.txtLastName);
            txtLastName.Text = mItems[position].LastName;
            TextView txtAge = row.FindViewById<TextView>(Resource.Id.txtAge);
            txtAge.Text = mItems[position].Age;
            TextView txtGender = row.FindViewById<TextView>(Resource.Id.txtGender);
            txtGender.Text = mItems[position].Gender;

            return row;
        }

        public override int Count
        {
            get { return mItems.Count; }
        }

        //indexer to use the instace of object MyListView in MainActivity
        public override Person this[int position]
        {
            get { return mItems[position]; }
        }
    }
}