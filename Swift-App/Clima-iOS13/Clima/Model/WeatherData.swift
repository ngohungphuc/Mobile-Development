//
//  WeatherData.swift
//  Clima
//
//  Created by Ngo Hung Phuc on 30/04/2021.
//  Copyright © 2021 App Brewery. All rights reserved.
//

import Foundation

struct WeatherData: Decodable {
    let name: String
    let main: Main
}


struct Main: Decodable {
    let temp: Double
}
