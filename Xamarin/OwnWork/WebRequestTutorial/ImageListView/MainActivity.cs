using System;
using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;
using System.Collections.Generic;
using System.IO;
using Android.Graphics;
using System.Net;
using System.Collections.Specialized;
using System.Text;

namespace WebRequestTutorial
{
    [Activity(Label = "Contacts", MainLauncher = true, Icon = "@drawable/xs")]
    public class MainActivity : Activity
    {
        private ListView mListView;
        private BaseAdapter<Contact> mAdapter;
        private List<Contact> mContacts;
        private ImageView mSelectedPic;
        protected override void OnCreate(Bundle bundle)
        {

            base.OnCreate(bundle);
            SetContentView(Resource.Layout.Main);

            mListView = FindViewById<ListView>(Resource.Id.listView);
            mContacts = new List<Contact>();

            Action<ImageView> action;
            action = PicSelected;

            mAdapter = new ContactListAdapter(this, Resource.Layout.row_contact, mContacts, action);
            mListView.Adapter = mAdapter;
        }

        private void PicSelected(ImageView selectedPic)
        {
            mSelectedPic = selectedPic;
            Intent intent = new Intent();
            intent.SetType("image/*");
            intent.SetAction(Intent.ActionGetContent);
            this.StartActivityForResult(Intent.CreateChooser(intent, "Select a photo"), 0);
        }

        protected override void OnActivityResult(int requestCode, [GeneratedEnum] Result resultCode, Intent data)
        {
            base.OnActivityResult(requestCode, resultCode, data);
            if(resultCode == Result.Ok)
            {
                Stream stream = ContentResolver.OpenInputStream(data.Data);
                mSelectedPic.SetImageBitmap(BitmapFactory.DecodeStream(stream));
            }
        }

        public override bool OnCreateOptionsMenu(IMenu menu)
        {
            MenuInflater.Inflate(Resource.Menu.actionbar, menu);
            return base.OnCreateOptionsMenu(menu);
        }

        public override bool OnOptionsItemSelected(IMenuItem item)
        {
            switch (item.ItemId)
            {
                case Resource.Id.add:

                    CreateContactDialog dialog = new CreateContactDialog();
                    FragmentTransaction transaction = FragmentManager.BeginTransaction();

                    //Subscribe to event
                    dialog.OnCreateContact += dialog_OnCreateContact;
                    dialog.Show(transaction, "create contact");
                    return true;

                default:
                    return base.OnOptionsItemSelected(item);
            }

        }

        void dialog_OnCreateContact(object sender, CreateContactEventArgs e)
        {
            mContacts.Add(new Contact() { Name = e.Name, Number = e.Number });
            mAdapter.NotifyDataSetChanged();
        }
    }
}

