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

namespace LoginSystem
{
    public class OnSignUpEventArgs : EventArgs
    {
        public string FirstName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public OnSignUpEventArgs(
            string firstName, 
            string email, 
            string password)
        {
            FirstName = firstName;
            Email = email;
            Password = password;
        }
    }

    class DialogSignUp : DialogFragment
    {
        public EditText txtFirstName;
        public EditText txtEmail;
        public EditText txtPassword;
        public Button btnSignUp;
        public event EventHandler<OnSignUpEventArgs> onSignUpComplete;
        public override View OnCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState)
        {
            base.OnCreateView(inflater, container, savedInstanceState);

            var view = inflater.Inflate(Resource.Layout.dialog_sign_up, container, false);

            txtFirstName = view.FindViewById<EditText>(Resource.Id.txtFirstName);
            txtEmail = view.FindViewById<EditText>(Resource.Id.txtEmail);
            txtPassword = view.FindViewById<EditText>(Resource.Id.txtEmail);
            btnSignUp = view.FindViewById<Button>(Resource.Id.btnDialogEmail);

            btnSignUp.Click += btnSignUp_Click;
            return view;
        }

        private void btnSignUp_Click(object sender, EventArgs e)
        {
            onSignUpComplete.Invoke(this,new OnSignUpEventArgs(txtFirstName.Text, txtEmail.Text, txtPassword.Text));
            this.Dismiss();
        }

        public override void OnActivityCreated(Bundle savedInstanceState)
        {
            // set title bar to invisible
            Dialog.Window.RequestFeature(WindowFeatures.NoTitle);
            base.OnActivityCreated(savedInstanceState);
            // set the animation
            Dialog.Window.Attributes.WindowAnimations = Resource.Style.dialog_animation;
        }
    }
}