//
//  ViewController.swift
//  ShoutOut

import UIKit

class ShoutOutDraftsViewController: UIViewController,
									UITableViewDataSource,
									UITableViewDelegate {

	@IBOutlet weak var tableView: UITableView!
	
	override func viewDidLoad() {
		super.viewDidLoad()
	}
	
	// MARK: TableView Data Source methods
	func numberOfSections(in tableView: UITableView) -> Int {
		return 1
	}
	
	func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
		return nil
	}
	
	
	func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
		return 1
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
		
	}
}
