//
//  ContentView.swift
//  Greeting
//
//  Created by Phúc Ngô on 30/04/2026.
//

import SwiftUI



struct ContentView: View {
    let messages: [DataItemModel] = [
        .init(text: "Hello there", color: .green),
        .init(text: "Welcome to swift", color:.gray),
        .init(text: "Are you ready", color: .yellow),
        .init(text: "Start exploring", color: .red)
    ]
    
    var body: some View {
            VStack(alignment: .leading) {
                ForEach(messages) {dataItem in
                    TextView(text: dataItem.text, color: dataItem.color)
                }
            }
            .padding()
            }
}

#Preview {
    ContentView()
}
