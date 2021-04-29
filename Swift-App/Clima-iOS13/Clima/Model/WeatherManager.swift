//
//  WeatherManager.swift
//  Clima
//
//  Created by Ngo Hung Phuc on 29/04/2021.
//  Copyright © 2021 App Brewery. All rights reserved.
//

import Foundation

struct WeatherManager {
    let weatherURL = "https://api.openweathermap.org/data/2.5/weather?appid=e72ca729af228beabd5d20e3b7749713&units=metric"
    
    func fetchWeather(cityName: String) {
        let urlString = "\(weatherURL)&q=\(cityName)"
        request(urlString)
    }
    
    func request(_ urlString: String) {
        if let url = URL(string: urlString) {
            let session = URLSession(configuration: .default)
            
            let task = session.dataTask(with: url, completionHandler: handle(data:response:error:))
            
            task.resume()
        }
    }
    
    func handle(data: Data?, response: URLResponse?, error: Error?) -> Void {
        
    }
}
