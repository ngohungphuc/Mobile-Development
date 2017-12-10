using System;
using System.Threading;
using Android.App;
using Android.Widget;
using Android.OS;
using Android.Views;

namespace LoginSystem
{
    [Activity(Label = "LoginSystem", MainLauncher = true)]
    public class MainActivity : Activity
    {
        private Button mButtonSignUp;
        private ProgressBar progressBar;
        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.Main);

            mButtonSignUp = FindViewById<Button>(Resource.Id.btnSignUp);
            progressBar = FindViewById<ProgressBar>(Resource.Id.progressBar1);
            mButtonSignUp.Click += mBtnSignUp_Click;
        }

        private void mBtnSignUp_Click(object sender, EventArgs e)
        {
            //pull up dialog
            FragmentTransaction transaction = FragmentManager.BeginTransaction();
            DialogSignUp signUpDialog = new DialogSignUp();
            signUpDialog.Show(transaction, "dialog fragment");

            signUpDialog.onSignUpComplete += signUpDialog_OnSignUpComplete;
        }

        private void signUpDialog_OnSignUpComplete(object sender, OnSignUpEventArgs e)
        {
            progressBar.Visibility = ViewStates.Visible;
            Thread thread = new Thread(ActLikeRequest);
            thread.Start();
        }

        private void ActLikeRequest()
        {
            Thread.Sleep(3000);
            RunOnUiThread(() =>
            {
                progressBar.Visibility = ViewStates.Invisible;
            });
        }
    }
}

