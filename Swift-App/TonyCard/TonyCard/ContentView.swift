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
            Color(red: 0.70, green: 0.75, blue: 0.76, opacity: 1.00).edgesIgnoringSafeArea(/*@START_MENU_TOKEN@*/.all/*@END_MENU_TOKEN@*/)
            Text("Tony Ngo")
                .font(.title)
                .bold()
                .foregroundColor(.white)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
