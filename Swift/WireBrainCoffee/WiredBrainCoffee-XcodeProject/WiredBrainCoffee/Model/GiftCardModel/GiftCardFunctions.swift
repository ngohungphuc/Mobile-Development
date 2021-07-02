//
//  GiftCardFunctions.swift
//  WiredBrainCoffee
//
//  Created by Mark Moeykens on 12/10/18.
//  Copyright © 2018 Mark Moeykens. All rights reserved.
//

import Foundation

class GiftCardFunctions {
    static func getSeasonalGiftCards(completion: @escaping ([GiftCardModel]) -> ()) {
        // Replace with real data store code
        
        DispatchQueue.global(qos: .userInitiated).async {
            var giftCardModels = [GiftCardModel]()
            giftCardModels.append(GiftCardModel(id: UUID(), description: "Seasonal Gift Card 1", image: #imageLiteral(resourceName: "SeasonalGiftCard1")))
            giftCardModels.append(GiftCardModel(id: UUID(), description: "Seasonal Gift Card 2", image: #imageLiteral(resourceName: "SeasonalGiftCard2")))
            giftCardModels.append(GiftCardModel(id: UUID(), description: "Seasonal Gift Card 3", image: #imageLiteral(resourceName: "SeasonalGiftCard3")))
            giftCardModels.append(GiftCardModel(id: UUID(), description: "Seasonal Gift Card 4", image: #imageLiteral(resourceName: "SeasonalGiftCard4")))
            giftCardModels.append(GiftCardModel(id: UUID(), description: "Seasonal Gift Card 5", image: #imageLiteral(resourceName: "SeasonalGiftCard5")))
            giftCardModels.append(GiftCardModel(id: UUID(), description: "Seasonal Gift Card 6", image: #imageLiteral(resourceName: "SeasonalGiftCard6")))

            DispatchQueue.main.async {
                completion(giftCardModels)
            }
        }
    }
    
    static func getThankYouGiftCards(completion: @escaping ([GiftCardModel]) -> ()) {
        // Replace with real data store code
        
        DispatchQueue.global(qos: .userInitiated).async {
            var giftCardModels = [GiftCardModel]()
            giftCardModels.append(GiftCardModel(id: UUID(), description: "Thank You Gift Card 1", image: #imageLiteral(resourceName: "ThankYouGiftCard1")))
            giftCardModels.append(GiftCardModel(id: UUID(), description: "Thank You Gift Card 2", image: #imageLiteral(resourceName: "ThankYouGiftCard2")))
            giftCardModels.append(GiftCardModel(id: UUID(), description: "Thank You Gift Card 3", image: #imageLiteral(resourceName: "ThankYouGiftCard3")))
            giftCardModels.append(GiftCardModel(id: UUID(), description: "Thank You Gift Card 4", image: #imageLiteral(resourceName: "ThankYouGiftCard4")))
            
            DispatchQueue.main.async {
                completion(giftCardModels)
            }
        }
    }
}
