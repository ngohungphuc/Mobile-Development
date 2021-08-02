//
//  ShoutOut.swift
//  ShoutOut
//
//  Created by Ngo Hung Phuc on 25/07/2021.
//  Copyright © 2021 pluralsight. All rights reserved.
//

import Foundation
import CoreData

class ShoutOut: NSManagedObject {
    @NSManaged var from: String?
    @NSManaged var message: String?
    @NSManaged var sentOn: Date?
    @NSManaged var shoutCategory: String
    
    @NSManaged var toEmployee: Employee
    
    static var entityName: String { return "ShoutOut" }
}
