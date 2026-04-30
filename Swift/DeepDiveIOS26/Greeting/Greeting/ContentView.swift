//
//  ContentView.swift
//  Greeting
//
//  Created by Phúc Ngô on 30/04/2026.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack{
            VStack {
                Image(systemName: "globe")
                    .imageScale(.large)
                    .foregroundStyle(.tint)
                
                LinearGradient(colors: [.cyan,.blue,.white], startPoint: .topLeading, endPoint: .bottomTrailing).ignoresSafeArea()
                
                Text("Greeting")
                    .font(.largeTitle)
                    .fontWeight(.semibold)
                    .foregroundStyle(.purple)
                    .padding()
                    .background(.orange)
                    .padding()
                    .shadow(color:.orange, radius: 5, x:5,y:5   )
                
            }
            .padding()
        }
    }
}

#Preview {
    ContentView()
}
