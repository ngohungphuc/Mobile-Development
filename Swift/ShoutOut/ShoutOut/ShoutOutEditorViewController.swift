//
//  ShoutOutEditorViewController.swift
//  ShoutOut

import UIKit

class ShoutOutEditorViewController: UIViewController {

	@IBOutlet weak var toEmployeePicker: UIPickerView!
	@IBOutlet weak var shoutCategoryPicker: UIPickerView!
	@IBOutlet weak var messageTextView: UITextView!
	@IBOutlet weak var fromTextField: UITextField!
	
	override func viewDidLoad() {
		super.viewDidLoad()
		
		messageTextView.layer.borderWidth = CGFloat(0.5)
		messageTextView.layer.borderColor = UIColor(red: 204/255, green: 204/255, blue: 204/255, alpha: 1.0).cgColor
		messageTextView.layer.cornerRadius = 5
		messageTextView.clipsToBounds = true
	}

	@IBAction func cancelButtonTapped(_ sender: UIBarButtonItem) {
		self.dismiss(animated: true, completion: nil)
	}
	
	@IBAction func saveButtonTapped(_ sender: UIBarButtonItem) {
		self.dismiss(animated: true, completion: nil)
	}
}
