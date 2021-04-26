//
//  CalculatorBrain.swift
//  BMI Calculator
//
//  Created by Ngo Hung Phuc on 26/04/2021.
//  Copyright © 2021 Angela Yu. All rights reserved.
//

import Foundation

struct CalculatorBrain {
    var bmi: Float?
    
    func getBMIValue() -> String {
        if let safeBMI = bmi {
            return String(format: "%.1f", safeBMI)
        } else {
            return "0.0"
        }
    }
    
    mutating func calculateBmi(_ height: Float,_ weight: Float) {
        bmi = weight / (height * height)
    }
}
