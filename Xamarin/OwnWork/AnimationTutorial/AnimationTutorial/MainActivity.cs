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
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.Main);
            mListView = FindViewById<ListView>(Resource.Id.listView);
            mSearch = FindViewById<EditText>(Resource.Id.etSearch);
            mContainer = FindViewById<LinearLayout>(Resource.Id.llContainer);

            mSearch.Alpha = 0;

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

            FriendsAdapter adapter = new FriendsAdapter(this, Resource.Layout.row_friend, mFriends);
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
                    //Search icon is click
                    if (isAnimating) return true;
                    if(!mAnimatedDown)
                    {
                        MyAnimation myAnimation = new MyAnimation(mListView, mListView.Height - mSearch.Height);
                        myAnimation.Duration = 500;
                        mListView.StartAnimation(myAnimation);
                        myAnimation.AnimationStart += MyAnimation_AnimationStartDown;
                        myAnimation.AnimationEnd += MyAnimation_AnimationEndDown;
                        mContainer.Animate().TranslationY(mSearch.Height).SetDuration(500).Start();
                    }
                    else
                    {

                        MyAnimation myAnimation = new MyAnimation(mListView, mListView.Height + mSearch.Height);
                        myAnimation.Duration = 500;
                        mListView.StartAnimation(myAnimation);
                        myAnimation.AnimationStart += MyAnimation_AnimationStartUp;
                        myAnimation.AnimationEnd += MyAnimation_AnimationEndUp;
                        mContainer.Animate().TranslationY(-mSearch.Height).SetDuration(500).Start();
                    }
                    mAnimatedDown =! mAnimatedDown;
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
            InputMethodManager inputManager = (InputMethodManager)this.GetSystemService(Context.InputMethodService);
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

