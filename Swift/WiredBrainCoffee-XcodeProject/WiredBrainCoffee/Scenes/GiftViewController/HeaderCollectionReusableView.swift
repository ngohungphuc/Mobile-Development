//
//  HeaderCollectionReusableView.swift
//  WiredBrainCoffee
//
//  Created by Ngo Hung Phuc on 29/06/2021.
//  Copyright © 2021 Mark Moeykens. All rights reserved.
//

import UIKit

class HeaderCollectionReusableView: UICollectionReusableView {
        
    @IBOutlet weak var headerLabel: UILabel!
    
    func setup(count: Int) {
        headerLabel.text = "Colors: \(count)"
    }
}
