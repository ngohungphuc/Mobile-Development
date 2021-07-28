//
//  ShoutOutEditorViewController.swift
//  ShoutOut

import UIKit
import CoreData

class ShoutOutEditorViewController: UIViewController,
                                    ManagedObjectContextDependentType,
                                    UIPickerViewDataSource,
                                    UIPickerViewDelegate {
    
    var shoutOut: ShoutOut!
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
    
    var employees: [Employee]!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        fetchEmployees()
        
        self.toEmployeePicker.dataSource = self
        self.toEmployeePicker.delegate = self
        self.toEmployeePicker.tag = 0
        self.shoutCategoryPicker.dataSource = self
        self.shoutCategoryPicker.delegate = self
        self.shoutCategoryPicker.tag = 1
        
        self.shoutOut = self.shoutOut ?? NSEntityDescription.insertNewObject(forEntityName: ShoutOut.entityName, into: self.managedObjectContext) as! ShoutOut
        
        
        messageTextView.layer.borderWidth = CGFloat(0.5)
        messageTextView.layer.borderColor = UIColor(red: 204/255, green: 204/255, blue: 204/255, alpha: 1.0).cgColor
        messageTextView.layer.cornerRadius = 5
        messageTextView.clipsToBounds = true
    }
    
    func fetchEmployees() {
        let fetchRequest = NSFetchRequest<Employee>(entityName: Employee.entityName)
        let primarySortDescriptor = NSSortDescriptor(key: #keyPath(Employee.lastName), ascending: true)
        let secondarySortDescriptor = NSSortDescriptor(key: #keyPath(Employee.firstName), ascending: true)
        
        fetchRequest.sortDescriptors = [primarySortDescriptor, secondarySortDescriptor]
        
        do {
            self.employees = try self.managedObjectContext.fetch(fetchRequest)
        } catch {
            self.employees = []
        }
    }
    
    @IBAction func cancelButtonTapped(_ sender: UIBarButtonItem) {
        self.dismiss(animated: true, completion: nil)
    }
    
    @IBAction func saveButtonTapped(_ sender: UIBarButtonItem) {
        let selectedEmployeeIndex = self.toEmployeePicker.selectedRow(inComponent: 0)
        let selectedEmployee = self.employees[selectedEmployeeIndex]
        self.shoutOut.toEmployee = selectedEmployee
        
        let selectedCategoryIndex = self.shoutCategoryPicker.selectedRow(inComponent: 0)
        let selectedCategory = self.shoutCategories[selectedCategoryIndex]
        self.shoutOut.shoutCategory = selectedCategory
        self.shoutOut.message = self.messageTextView.text
        self.shoutOut.from = self.fromTextField.text ?? "Anonymous"
        
        do {
            try self.managedObjectContext.save()
            self.dismiss(animated: true, completion: nil)
        } catch {
            let alert = UIAlertController(title: "Trouble Saving",
                                          message: "Something went wrong when trying to save the ShoutOut.  Please try again...",
                                          preferredStyle: .alert)
            let okAction = UIAlertAction(title: "OK",
                                         style: .default,
                                         handler: {(action: UIAlertAction) -> Void in
                                            self.managedObjectContext.rollback()
                                            self.shoutOut = (NSEntityDescription.insertNewObject(forEntityName: ShoutOut.entityName, into: self.managedObjectContext) as! ShoutOut)
                                            
                                         })
            alert.addAction(okAction)
            self.present(alert, animated: true, completion: nil)
        }
    }
    
    func numberOfComponents(in pickerView: UIPickerView) -> Int {
        return 1
    }
    
    func pickerView(_ pickerView: UIPickerView,
                    numberOfRowsInComponent component: Int) -> Int {
        
        return pickerView.tag == 0 ? self.employees.count : self.shoutCategories.count
    }
    
    func pickerView(_ pickerView: UIPickerView,
                    titleForRow row: Int,
                    forComponent component: Int) -> String? {
        
        if pickerView.tag == 0 {
            let employee = self.employees[row]
            
            return "\(employee.firstName) \(employee.lastName)"
        } else {
            return shoutCategories[row]
        }
    }
}
