//
//  ContentView.swift
//  Greeting
//
//  Created by Phúc Ngô on 30/04/2026.
//

import SwiftUI



struct ContentView: View {
    
    
    var body: some View {
        ZStack {
            Color.black.opacity(0.2).ignoresSafeArea()
            
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
