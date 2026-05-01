//
//  TitleView.swift
//  Greeting
//
//  Created by Phúc Ngô on 01/05/2026.
//

import SwiftUI

struct TitleView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            Text("Grettings").font(.largeTitle).fontWeight(.semibold)
            Text("Exploring IOS").font(.headline).fontWeight(.thin)
        }
    }
}

#Preview {
    TitleView()
}
