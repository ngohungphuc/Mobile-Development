//
//  ShoutOutEditorViewController.swift
//  ShoutOut

import UIKit
import CoreData

class ShoutOutEditorViewController: UIViewController,
                                    ManagedObjectContextDependentType,
                                    UIPickerViewDataSource,
                                    UIPickerViewDelegate {
    
    var managedObjectContext: NSManagedObjectContext!
    @IBOutlet weak var toEmployeePicker: UIPickerView!
    @IBOutlet weak var shoutCategoryPicker: UIPickerView!
    @IBOutlet weak var messageTextView: UITextView!
    @IBOutlet weak var fromTextField: UITextField!
    
    let shoutCategories = [
        "Great Job!",
        "Awesome Work!",
        "Well Done!",
        "Amazing Effort!"
    ]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.shoutCategoryPicker.dataSource = self
        self.shoutCategoryPicker.delegate = self
        
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
    
    func numberOfComponents(in pickerView: UIPickerView) -> Int {
        return 1
    }
    
    func pickerView(_ pickerView: UIPickerView,
                    numberOfRowsInComponent component: Int) -> Int {
        
        return self.shoutCategories.count
    }
    
    func pickerView(_ pickerView: UIPickerView,
                    titleForRow row: Int,
                    forComponent component: Int) -> String? {
        
        return shoutCategories[row]
    }
}
