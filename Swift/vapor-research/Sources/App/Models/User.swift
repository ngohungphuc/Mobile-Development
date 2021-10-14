//
//  File.swift
//  
//
//  Created by Hung Phuc Ngo on 14/10/2021.
//

import Vapor
import FluentMySQLDriver

final class User: Model {
    @ID(key: .id)
    var id: Int?
    @Field(key: "firstName")
    var firstName: String
    @Field(key: "lastName")
    var lastName: String
    @Field(key: "age")
    var age: Int
    
    static let schema = "users"
    
    init() {
    
    }
    
    init(id: Int? = nil, firstName: String, lastName: String, age: Int) {
        self.firstName = firstName
        self.lastName = lastName
        self.age = age
        self.id = id
    }
    
}

struct MyMigration: Migration {
    func prepare(on database: Database) -> EventLoopFuture<Void> {
         return database
           .schema("users")
           .id()
           .field("firstName", .string)
           .field("lastName", .string)
           .field("age", .int)
           .create()
       }

       func revert(on database: Database) -> EventLoopFuture<Void> {
         return database.schema("users").delete()
       }
}
