//
//  BackgroundView.swift
//  Greeting
//
//  Created by Phúc Ngô on 01/05/2026.
//

import SwiftUI

struct BackgroundView: View {
    var body: some View {
        LinearGradient(colors: [.blue, Color(red: 139/255, green: 80/255, blue: 240/255)], startPoint: .topLeading, endPoint: .bottomTrailing).opacity(1).ignoresSafeArea()
    }
}

#Preview {
    BackgroundView()
}
