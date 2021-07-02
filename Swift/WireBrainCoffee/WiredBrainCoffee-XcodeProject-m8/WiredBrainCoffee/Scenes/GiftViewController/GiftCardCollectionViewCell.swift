//
//  GiftCardCollectionViewCell.swift
//  WiredBrainCoffee
//
//  Created by Mark Moeykens on 5/10/19.
//  Copyright © 2019 Mark Moeykens. All rights reserved.
//

import UIKit

class GiftCardCollectionViewCell: UICollectionViewCell {
    @IBOutlet weak var giftCardImageView: UIImageView!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        
        layer.cornerRadius = 10
        giftCardImageView.layer.cornerRadius = layer.cornerRadius
        layer.shadowOpacity = 1
        layer.shadowOffset = CGSize(width: 1, height: 1)
    }
    
    func setup(giftCardModel: GiftCardModel) {
        giftCardImageView.image = giftCardModel.image
    }
}
