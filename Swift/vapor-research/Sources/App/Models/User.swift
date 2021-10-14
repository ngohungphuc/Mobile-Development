//
//  File.swift
//  
//
//  Created by Hung Phuc Ngo on 14/10/2021.
//

import Vapor
import FluentMySQLDriver

final class User: Codable {
    var id: Int?
    var firstName: String
    var lastName: String
    var age: Int
    
    init(firstName: String, lastName: String, age: Int) {
        self.firstName = firstName
        self.lastName = lastName
        self.age = age
    }
}
