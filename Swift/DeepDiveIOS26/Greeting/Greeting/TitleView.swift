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
    @State private var subTitle: LocalizedStringKey = "Explore IOS"
    let subTitles: [LocalizedStringKey] = [
        "Explore IOS",
        "Grettings"
    ]
    var angle: Angle {
        isRotated ? .zero: Angle(degrees: 360)
    }
    var angularGradient: AngularGradient {
        AngularGradient.init(gradient: Gradient(colors:  [.blue, .green, .red]), center: .center, angle: .zero)
    }
    
    @State private var isRotated: Bool = false
    
    var body: some View {
        HStack {
            VStack(alignment: .leading, spacing: 0) {
                Text("Grettings").font(.largeTitle).fontWeight(.semibold)
                Text(subTitle).font(.headline).fontWeight(.thin)
            }.onTapGesture {
                subTitle = subTitles.randomElement()!
            }
            
            Spacer()
            Circle().strokeBorder(angularGradient, lineWidth: 15).rotationEffect(angle).frame(width: 70, height: 70).onTapGesture {
                withAnimation {
                    isRotated.toggle()
                }
            }
        }
    }
}

#Preview {
    VStack {
        TitleView()
        Spacer()
    }.padding()
}
