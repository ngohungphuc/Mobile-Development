//
//  DataService.swift
//  ShoutOut
//
//  Created by Ngo Hung Phuc on 27/07/2021.
//  Copyright © 2021 pluralsight. All rights reserved.
//

import Foundation
import CoreData

struct DataService: ManagedObjectContextDependentType {
    var managedObjectContext: NSManagedObjectContext!
    
    func seedEmployees() {
        let emp1 = NSEntityDescription.insertNewObject(forEntityName: "Employee", into: self.managedObjectContext) as! Employee
        emp1.firstName = "Tony"
        emp1.lastName = "Hudson"
        
        do {
            try self.managedObjectContext.save()
        }
        catch {
            print("\(error)")
            self.managedObjectContext.rollback()
        }
    }
}
