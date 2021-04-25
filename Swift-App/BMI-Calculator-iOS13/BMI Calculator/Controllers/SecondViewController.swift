//
//  SecondViewController.swift
//  BMI Calculator
//
//  Created by Ngo Hung Phuc on 25/04/2021.
//  Copyright © 2021 Angela Yu. All rights reserved.
//

import UIKit

class SecondViewController: UIViewController {
    var bmiValue = "0.0"
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        view.backgroundColor = .red
        let label = UILabel()
        label.text = bmiValue
        label.frame = CGRect(x: 0, y: 0, width: 100, height: 50)
        view.addSubview(label)
    }
}
