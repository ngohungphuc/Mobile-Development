//
//  ContentView.swift
//  Greeting
//
//  Created by Phúc Ngô on 30/04/2026.
//

import SwiftUI



struct ContentView: View {
    
    
    var body: some View {
        /*@START_MENU_TOKEN@*//*@PLACEHOLDER=Container@*/VStack/*@END_MENU_TOKEN@*/ {
            VStack(alignment: .leading) {
                TitleView()
                Spacer()
                MessagesView()
            }
            .padding()
        }
    }
}

#Preview {
    ContentView()
}
