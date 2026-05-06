//
//  GreetingsTextView.swift
//  Greeting
//
//  Created by Phúc Ngô on 06/05/2026.
//

import SwiftUI

struct GreetingsTextView: View {
    @Binding var subTitle: LocalizedStringKey
    let subTitles: [LocalizedStringKey] = [
        "Explore IOS",
        "Grettings"
    ]
    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            Text("Grettings").font(.largeTitle).fontWeight(.semibold)
            Text(subTitle).font(.headline).fontWeight(.thin)
        }.onTapGesture {
            subTitle = subTitles.randomElement()!
        }
    }
}

#Preview {
    GreetingsTextView(subTitle: .constant("Explore IOS"))
}
