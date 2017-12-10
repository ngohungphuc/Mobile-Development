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
using Android.Graphics;

namespace AnimationTutorial
{
    class FriendsAdapter : BaseAdapter<Friend>
    {
        private Context mContext;
        private int mRowLayout;
        private List<Friend> mFriends;
        private int [] mAlternatingColors;

        public FriendsAdapter(Context context, int rowLayout, List<Friend> friends)
        {
            mContext = context;
            mRowLayout = rowLayout;
            mFriends = friends;
            mAlternatingColors = new int[] { 0xF2F2F2, 0x009900 };
        }

        public override int Count
        {
            get { return mFriends.Count; }
        }

        public override Friend this[int position]
        {
            get { return mFriends[position]; }
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
                row = LayoutInflater.From(mContext).Inflate(mRowLayout, parent, false);
            }

            row.SetBackgroundColor(GetColorFromInteger(mAlternatingColors[position % mAlternatingColors.Length]));

            
            TextView firstName = row.FindViewById<TextView>(Resource.Id.txtFirstName);
            firstName.Text = mFriends[position].FirstName;

            TextView lastName = row.FindViewById<TextView>(Resource.Id.txtLastName);
            lastName.Text = mFriends[position].LastName;

            TextView age = row.FindViewById<TextView>(Resource.Id.txtAge);
            age.Text = mFriends[position].Age;

            TextView gender = row.FindViewById<TextView>(Resource.Id.txtGender);
            gender.Text = mFriends[position].Gender;

            if ((position % 2) == 1)
            {
                //Green background, set text white
                firstName.SetTextColor(Color.White);
                lastName.SetTextColor(Color.White);
                age.SetTextColor(Color.White);
                gender.SetTextColor(Color.White);
            }

            else
            {
                //White background, set text black
                firstName.SetTextColor(Color.Black);
                lastName.SetTextColor(Color.Black);
                age.SetTextColor(Color.Black);
                gender.SetTextColor(Color.Black);
            }

            return row;
        }

        private Color GetColorFromInteger(int color)
        {
            return Color.Rgb(Color.GetRedComponent(color), Color.GetGreenComponent(color), Color.GetBlueComponent(color));
        }
    }
}