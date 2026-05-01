//
//  MessagesView.swift
//  Greeting
//
//  Created by Phúc Ngô on 01/05/2026.
//

import SwiftUI

struct MessagesView: View {
    let messages: [DataItemModel] = [
        .init(text: "Hello there", color: .green),
        .init(text: "Welcome to swift", color:.gray),
        .init(text: "Are you ready", color: .yellow),
        .init(text: "Start exploring", color: .red)
    ]
    
    var body: some View {
        ForEach(messages) {dataItem in
            TextView(text: dataItem.text, color: dataItem.color)
        }
    }
}

#Preview {
    MessagesView()
}
