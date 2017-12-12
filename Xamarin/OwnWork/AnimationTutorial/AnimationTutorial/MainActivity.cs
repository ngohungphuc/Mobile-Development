using System;
using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;
using System.Collections.Generic;
using Android.Views.InputMethods;
using Android.Views.Animations;
using Android.Hardware.Input;
using System.Linq;

namespace AnimationTutorial
{
    [Activity(Label = "AnimationTutorial", MainLauncher = true, Icon = "@drawable/xs")]
    public class MainActivity : Activity
    {
        private List<Friend> mFriends;
        private ListView mListView;
        private EditText mSearch;
        private LinearLayout mContainer;
        private bool mAnimatedDown;
        private bool isAnimating;
        private FriendsAdapter adapter;
        private TextView txtHeaderFirstName;
        private TextView txtHeaderLastName;
        private TextView txtHeaderAge;
        private TextView txtHeaderGender;
        private bool mFirstNameAsc;
        private bool mLastNameAsc;
        private bool mAgeAsc;
        private bool mGenderAsc;
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.Main);
            mListView = FindViewById<ListView>(Resource.Id.listView);
            mSearch = FindViewById<EditText>(Resource.Id.etSearch);
            mContainer = FindViewById<LinearLayout>(Resource.Id.llContainer);

            txtHeaderFirstName = FindViewById<TextView>(Resource.Id.txtHeaderFirstName);
            txtHeaderFirstName.Click += TxtHeaderFirstName_Click;

            txtHeaderLastName = FindViewById<TextView>(Resource.Id.txtHeaderLastName);
            txtHeaderLastName.Click += TxtHeaderLastName_Click;

            txtHeaderAge = FindViewById<TextView>(Resource.Id.txtHeaderAge);
            txtHeaderAge.Click += TxtHeaderAge_Click;

            txtHeaderGender = FindViewById<TextView>(Resource.Id.txtHeaderGender);
            txtHeaderGender.Click += TxtHeaderGender_Click;

            mSearch.Alpha = 0;
            mContainer.BringToFront();
            mSearch.TextChanged += MSearch_TextChanged;

            mFriends = new List<Friend>
            {
                new Friend { FirstName = "Bob", LastName = "Smith", Age = "33", Gender = "Male" },
                new Friend { FirstName = "Tom", LastName = "Smith", Age = "45", Gender = "Male" },
                new Friend { FirstName = "Julie", LastName = "Smith", Age = "2020", Gender = "Unknown" },
                new Friend { FirstName = "Molly", LastName = "Smith", Age = "21", Gender = "Female" },
                new Friend { FirstName = "Joe", LastName = "Lopez", Age = "22", Gender = "Male" },
                new Friend { FirstName = "Ruth", LastName = "White", Age = "81", Gender = "Female" },
                new Friend { FirstName = "Sally", LastName = "Johnson", Age = "54", Gender = "Female" }
            };

            adapter = new FriendsAdapter(this, Resource.Layout.row_friend, mFriends);
            mListView.Adapter = adapter;
        }

        private void TxtHeaderGender_Click(object sender, EventArgs e)
        {
            throw new NotImplementedException();
        }

        private void TxtHeaderAge_Click(object sender, EventArgs e)
        {
            throw new NotImplementedException();
        }

        private void TxtHeaderLastName_Click(object sender, EventArgs e)
        {
            throw new NotImplementedException();
        }

        private void TxtHeaderFirstName_Click(object sender, EventArgs e)
        {
            List<Friend> filter;
            if(!mFirstNameAsc)
            {
                filter = (from friend in mFriends
                          orderby friend.FirstName select friend).ToList();
                adapter = new FriendsAdapter(this, Resource.Layout.row_friend, filter);
                mListView.Adapter = adapter;
            }
            else
            {
                filter = (from friend in mFriends
                          orderby friend.FirstName descending
                          select friend).ToList();
                adapter = new FriendsAdapter(this, Resource.Layout.row_friend, filter);
                mListView.Adapter = adapter;
            }
            mFirstNameAsc = !mFirstNameAsc;
        }

        private void MSearch_TextChanged(object sender, Android.Text.TextChangedEventArgs e)
        {
            List<Friend> searchedFriend = (from friend in mFriends
                                          where friend.FirstName.Contains(mSearch.Text, StringComparison.OrdinalIgnoreCase) 
                                          || friend.LastName.Contains(mSearch.Text, StringComparison.OrdinalIgnoreCase)
                                          select friend).ToList();
            adapter = new FriendsAdapter(this, Resource.Layout.row_friend, searchedFriend);
            mListView.Adapter = adapter;
        }

        public override bool OnCreateOptionsMenu(IMenu menu)
        {
            MenuInflater.Inflate(Resource.Menu.actionbar, menu);
            return base.OnCreateOptionsMenu(menu);
        }

        public override bool OnOptionsItemSelected(IMenuItem item)
        {
            switch(item.ItemId)
            {
                case Resource.Id.search:
                    mSearch.Visibility = ViewStates.Visible;
                    //Search icon is click
                    if (isAnimating) return true;
                    if(!mAnimatedDown)
                    {
                        MyAnimation myAnimation = new MyAnimation(mListView, mListView.Height - mSearch.Height);
                        myAnimation.Duration = 500;
                        mListView.StartAnimation(myAnimation);
                        myAnimation.AnimationStart += MyAnimation_AnimationStartDown;
                        myAnimation.AnimationEnd += MyAnimation_AnimationEndDown;
                        mContainer.Animate().TranslationYBy(mSearch.Height).SetDuration(500).Start();
                    }
                    else
                    {

                        MyAnimation myAnimation = new MyAnimation(mListView, mListView.Height + mSearch.Height);
                        myAnimation.Duration = 500;
                        mListView.StartAnimation(myAnimation);
                        myAnimation.AnimationStart += MyAnimation_AnimationStartUp;
                        myAnimation.AnimationEnd += MyAnimation_AnimationEndUp;
                        mContainer.Animate().TranslationYBy(-mSearch.Height).SetDuration(500).Start();
                    }
                    mAnimatedDown = !mAnimatedDown;
                    return true;
                default:
                    return base.OnOptionsItemSelected(item);
            }
            
        }

        private void MyAnimation_AnimationEndUp(object sender, Animation.AnimationEndEventArgs e)
        {
            isAnimating = false;
            mSearch.ClearFocus();
            //hide keyboard
            InputMethodManager inputManager = (InputMethodManager)GetSystemService(InputMethodService);
            inputManager.HideSoftInputFromWindow(CurrentFocus.WindowToken, HideSoftInputFlags.NotAlways);
        }

        private void MyAnimation_AnimationEndDown(object sender, Android.Views.Animations.Animation.AnimationEndEventArgs e)
        {
            isAnimating = false;
        }

        private void MyAnimation_AnimationStartDown(object sender, Android.Views.Animations.Animation.AnimationStartEventArgs e)
        {
            isAnimating = true;
            mSearch.Animate().AlphaBy(1.0f).SetDuration(500).Start();
        }

        private void MyAnimation_AnimationStartUp(object sender, Android.Views.Animations.Animation.AnimationStartEventArgs e)
        {
            isAnimating = true;
            mSearch.Animate().AlphaBy(-1.0f).SetDuration(300).Start();
        }
    }
}

