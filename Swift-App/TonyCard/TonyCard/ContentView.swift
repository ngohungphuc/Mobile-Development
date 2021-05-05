//
//  ContentView.swift
//  TonyCard
//
//  Created by Ngo Hung Phuc on 05/05/2021.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color(.green).edgesIgnoringSafeArea(/*@START_MENU_TOKEN@*/.all/*@END_MENU_TOKEN@*/)
            Text("Hello, world!")
                .padding()
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
