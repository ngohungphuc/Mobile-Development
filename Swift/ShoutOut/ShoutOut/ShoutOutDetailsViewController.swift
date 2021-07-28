//
//  ShoutOutDetailsViewController.swift
//  ShoutOut

import UIKit
import CoreData

class ShoutOutDetailsViewController: UIViewController,
                                     ManagedObjectContextDependentType {
    var shoutOut: ShoutOut
    var managedObjectContext: NSManagedObjectContext!
    @IBOutlet weak var shoutCategoryLabel: UILabel!
    @IBOutlet weak var messageTextView: UITextView!
    @IBOutlet weak var fromLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    // MARK: - Navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let navigationController = segue.destination as! UINavigationController
        let destinationVC = navigationController.viewControllers[0] as! ShoutOutEditorViewController
        destinationVC.managedObjectContext = self.managedObjectContext
    }
}
