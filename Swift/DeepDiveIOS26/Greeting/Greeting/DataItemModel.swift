//
//  DataItemModel.swift
//  Greeting
//
//  Created by Phúc Ngô on 01/05/2026.
//

import Foundation
import SwiftUI

struct DataItemModel: Identifiable {
    let id = UUID()
    let text: String
    let color: Color
}
