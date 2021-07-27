//
//  Employee.swift
//  ShoutOut
//
//  Created by Ngo Hung Phuc on 26/07/2021.
//  Copyright © 2021 pluralsight. All rights reserved.
//

import Foundation
import CoreData

class Employee: NSManagedObject {
    @NSManaged var firstName: String
    @NSManaged var lastName: String
    
    @NSManaged var shoutOuts: NSSet?
    
    static var entityName: String { return "Employee" }
}
