using Android.App;
using Android.Widget;
using Android.OS;
using System;
using System.ComponentModel;
using System.Threading;
using Android.Support.V4.Widget;

namespace SwipeRefresh
{
    [Activity(Label = "SwipeRefresh", MainLauncher = true)]
    public class MainActivity : Activity
    {
        SwipeRefreshLayout swipeRefreshLayout;
        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.Main);
            swipeRefreshLayout = FindViewById<SwipeRefreshLayout>(Resource.Id.swipeLayout);
            swipeRefreshLayout.SetColorScheme(Android.Resource.Color.HoloBlueBright, Android.Resource.Color.HoloBlueDark, Android.Resource.Color.HoloBlueLight, Android.Resource.Color.HoloRedLight);
            // run this event if the view is pull down
            swipeRefreshLayout.Refresh += mSwipeRefreshLayout_Refresh;
        }

        private void mSwipeRefreshLayout_Refresh(object sender, EventArgs e)
        {
            BackgroundWorker worker = new BackgroundWorker();
            worker.DoWork += Worker_DoWork;
            worker.RunWorkerCompleted += Worker_RunWorkerCompleted;
            worker.RunWorkerAsync();
        }

        private void Worker_RunWorkerCompleted(object sender, RunWorkerCompletedEventArgs e)
        {
            RunOnUiThread(() => { swipeRefreshLayout.Refreshing = false; });
        }

        private void Worker_DoWork(object sender, DoWorkEventArgs e)
        {
            // will run on seperate thread
            Thread.Sleep(3000);
        }
    }
}

