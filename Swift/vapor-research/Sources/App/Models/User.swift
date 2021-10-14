//
//  File.swift
//  
//
//  Created by Hung Phuc Ngo on 14/10/2021.
//

import Vapor
import FluentMySQLDriver

final class User: Codable {
    @ID(key: .id)
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

extension User: Model {
    convenience init() {
        
    }
    
    static let schema = "users"
}

extension User: Content {
}

extension User: Migration {
    func prepare(on database: Database) -> EventLoopFuture<Void> {
        <#code#>
    }
    
    func revert(on database: Database) -> EventLoopFuture<Void> {
        <#code#>
    }
}
