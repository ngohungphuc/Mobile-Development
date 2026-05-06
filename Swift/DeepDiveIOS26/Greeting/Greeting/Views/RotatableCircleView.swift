//
//  RotatableCircleView.swift
//  Greeting
//
//  Created by Phúc Ngô on 06/05/2026.
//

import SwiftUI

struct RotatableCircleView: View {
    let lineWidth = 15.0
    let diameter = 70.0
    var angle: Angle {
        isRotated ? .zero: Angle(degrees: 360)
    }
    var angularGradient: AngularGradient {
        AngularGradient.init(gradient: Gradient(colors:  [.blue, .green, .red]), center: .center, angle: .zero)
    }
    
    @State private var isRotated: Bool = false
    var body: some View {
        Circle().strokeBorder(angularGradient, lineWidth: 15).rotationEffect(angle).frame(width: 70, height: 70).onTapGesture {
            withAnimation {
                isRotated.toggle()
            }
        }
    }
}

#Preview {
    RotatableCircleView()
}
