//
//  testApp.swift
//  test
//
//  Created by Ngo Hung Phuc on 20/05/2021.
//

import SwiftUI

@main
struct testApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
