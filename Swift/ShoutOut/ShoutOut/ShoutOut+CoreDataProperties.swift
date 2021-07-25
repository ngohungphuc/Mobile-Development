//
//  ShoutOut+CoreDataProperties.swift
//  ShoutOut
//
//  Created by Ngo Hung Phuc on 25/07/2021.
//  Copyright © 2021 pluralsight. All rights reserved.
//
//

import Foundation
import CoreData


extension ShoutOut {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<ShoutOut> {
        return NSFetchRequest<ShoutOut>(entityName: "ShoutOut")
    }

    @NSManaged public var from: String?
    @NSManaged public var sentDate: Date?
    @NSManaged public var message: String?
    @NSManaged public var shoutCategory: String

}
