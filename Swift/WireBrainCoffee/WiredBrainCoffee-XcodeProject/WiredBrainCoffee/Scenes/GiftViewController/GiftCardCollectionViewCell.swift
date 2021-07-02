//
//  GiftCardCollectionViewCell.swift
//  WiredBrainCoffee
//
//  Created by Ngo Hung Phuc on 02/07/2021.
//  Copyright © 2021 Mark Moeykens. All rights reserved.
//

import UIKit

class GiftCardCollectionViewCell: UICollectionViewCell {
    @IBOutlet weak var giftCardImageView: UIImageView!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        
        layer.cornerRadius = 10
        layer.shadowOpacity = 1
        layer.shadowOffset = CGSize(width: 1, height: 1)
    }
    
    func setup(giftCardModel: GiftCardModel) {
        giftCardImageView.image = giftCardModel.image
        
    }
}
