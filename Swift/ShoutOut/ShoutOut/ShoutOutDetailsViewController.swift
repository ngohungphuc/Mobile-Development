//
//  ShoutOutDetailsViewController.swift
//  ShoutOut

import UIKit

class ShoutOutDetailsViewController: UIViewController {

	@IBOutlet weak var shoutCategoryLabel: UILabel!
	@IBOutlet weak var messageTextView: UITextView!
	@IBOutlet weak var fromLabel: UILabel!
	
    override func viewDidLoad() {
        super.viewDidLoad()
    }
	
	// MARK: - Navigation
	override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
		
	}
}
