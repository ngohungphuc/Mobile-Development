//
//  Data.swift
//  Todoey
//
//  Created by Ngo Hung Phuc on 24/05/2021.
//  Copyright © 2021 App Brewery. All rights reserved.
//

import Foundation
import RealmSwift

class Data: Object {
    @objc dynamic var name: String = ""
    @objc dynamic var age: Int = 0
}
