//
//  VerticalTitleView.swift
//  Greeting
//
//  Created by Phúc Ngô on 06/05/2026.
//

import SwiftUI

struct VerticalTitleView: View {
    @State private var subTitle: LocalizedStringKey = "Explore IOS"
    var body: some View {
        VStack(alignment: .leading) {
            
            GreetingsTextView(subTitle: $subTitle)
            RotatableCircleView()
            
            Spacer()
        }
    }
}

#Preview {
    VerticalTitleView()
}
