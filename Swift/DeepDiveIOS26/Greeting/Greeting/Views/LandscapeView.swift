//
//  LandscapeView.swift
//  Greeting
//
//  Created by Phúc Ngô on 06/05/2026.
//

import SwiftUI

struct LandscapeView: View {
    var body: some View {
        ZStack {
            BackgroundView()
            
            HStack {
                VerticalTitleView()
                
                Spacer()
                
                MessagesView()
                
            }.padding()
        }
    }
}

#Preview {
    LandscapeView()
}
