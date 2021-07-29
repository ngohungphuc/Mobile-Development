//
//  ViewController.swift
//  ShoutOut

import UIKit
import CoreData
class ShoutOutDraftsViewController: UIViewController,
                                    UITableViewDataSource,
                                    UITableViewDelegate,
                                    ManagedObjectContextDependentType {
    
    var managedObjectContext: NSManagedObjectContext!
    var fetchedResultsController: NSFetchedResultsController<ShoutOut>!
    @IBOutlet weak var tableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        configureFetchedResultsController()
        
        do {
            try self.fetchedResultsController.performFetch()
        } catch {
            let alertController = UIAlertController(title: "Loading ShoutOuts Failed",
                                                    message: "There was a problem loading the list of ShoutOut drafts. Please try again.",
                                                    preferredStyle: .alert)
            
            let okAction = UIAlertAction(title: "OK", style: .default, handler: nil)
            
            alertController.addAction(okAction)
            
            self.present(alertController, animated: true, completion: nil)
        }
    }
    
    func configureFetchedResultsController() {
        let fetchRequest = NSFetchRequest<ShoutOut>(entityName: ShoutOut.entityName)
        let primarySortDescriptor = NSSortDescriptor(key: #keyPath(ShoutOut.toEmployee.lastName), ascending: true)
        let secondarySortDescriptor = NSSortDescriptor(key: #keyPath(ShoutOut.toEmployee.firstName), ascending: true)
        
        fetchRequest.sortDescriptors = [primarySortDescriptor, secondarySortDescriptor]
        self.fetchedResultsController = NSFetchedResultsController<ShoutOut>(fetchRequest: fetchRequest, managedObjectContext: self.managedObjectContext, sectionNameKeyPath: nil, cacheName: nil)
    }
    
    // MARK: TableView Data Source methods
    func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    
    func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        return nil
    }
    
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        if let sections = self.fetchedResultsController.sections {
            return sections[section].numberOfObjects
        }
        return 0
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "subtitleCell", for: indexPath)
        
        cell.textLabel?.text = "Jane Sherman"
        cell.detailTextLabel?.text = "Great Job!"
        
        return cell
    }
    
    // MARK: TableView Delegate methods
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
    }
    
    // MARK: - Navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        switch segue.identifier! {
        case "addShoutOut":
            let navigationController = segue.destination as! UINavigationController
            let destinationVC = navigationController.viewControllers[0] as! ShoutOutEditorViewController
            destinationVC.managedObjectContext = self.managedObjectContext
            
        case "shoutOutDetails":
            let navigationController = segue.destination as! UINavigationController
            let destinationVC = navigationController.viewControllers[0] as! ShoutOutEditorViewController
            destinationVC.managedObjectContext = self.managedObjectContext
            
        default:
            break
        }
    }
}
