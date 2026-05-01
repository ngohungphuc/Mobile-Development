//
//  TextView.swift
//  Greeting
//
//  Created by Phúc Ngô on 30/04/2026.
//

import SwiftUI

struct TextView: View {
    let text: String
    let color: Color
    
    var body: some View {
        Text(text)
            .fontWeight(.semibold)
            .padding()
            .foregroundStyle(Color.white)
            .background(color.opacity(0.4))
            .cornerRadius(20.0)
            .shadow(color:color, radius: 5, x:10, y:10)
    }
}

#Preview {
    VStack{
        TextView(text: "Hello", color: .blue)
        TextView(text: "Hello", color: .blue)
    }
}
