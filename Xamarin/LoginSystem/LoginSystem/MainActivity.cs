using System;
using Android.App;
using Android.Widget;
using Android.OS;

namespace LoginSystem
{
    [Activity(Label = "LoginSystem", MainLauncher = true)]
    public class MainActivity : Activity
    {
        private Button mButtonSignUp;
        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.Main);

            mButtonSignUp = FindViewById<Button>(Resource.Id.btnSignUp);

            mButtonSignUp.Click += mBtnSignUp_Click;
        }

        private void mBtnSignUp_Click(object sender, EventArgs e)
        {
            //pull up dialog
            FragmentTransaction transaction = FragmentManager.BeginTransaction();
            DialogSignUp signUpDialog = new DialogSignUp();
            signUpDialog.Show(transaction,"dialog fragment");
        }
    }
}

