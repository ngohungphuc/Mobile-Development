//
//  ColorCollectionViewCell.swift
//  WiredBrainCoffee
//
//  Created by Ngo Hung Phuc on 02/07/2021.
//  Copyright © 2021 Mark Moeykens. All rights reserved.
//

import UIKit

class ColorCollectionViewCell: UICollectionViewCell {
    
    @IBOutlet weak var numberLabel: UILabel!
    
    func setup(backgroundColor: UIColor, cellNumber: Int) {
        self.backgroundColor = backgroundColor;
        numberLabel.text = "\(cellNumber)"
    }
}
