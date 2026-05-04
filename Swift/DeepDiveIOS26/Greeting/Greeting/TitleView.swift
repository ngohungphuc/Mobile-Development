//
//  TitleView.swift
//  Greeting
//
//  Created by Phúc Ngô on 01/05/2026.
//

import SwiftUI

struct TitleView: View {
    let lineWidth = 15.0
    let diameter = 70.0
    
    var body: some View {
        HStack {
            VStack(alignment: .leading, spacing: 0) {
                Text("Grettings").font(.largeTitle).fontWeight(.semibold)
                Text("Exploring IOS").font(.headline).fontWeight(.thin)
            }
            Spacer()
            Circle().strokeBorder(AngularGradient.init(gradient: Gradient(colors:  [.blue, .green, .red]), center: .center, angle: .zero), lineWidth: 15).frame(width: 70, height: 70)
        }
    }
}

#Preview {
    VStack {
        TitleView()
        Spacer()
    }.padding()
}
