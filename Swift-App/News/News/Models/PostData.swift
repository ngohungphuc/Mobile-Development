//
//  PostData.swift
//  News
//
//  Created by Ngo Hung Phuc on 09/05/2021.
//

import Foundation

struct Results: Decodable {
    let hits: [PostEntity]
}

struct PostEntity: Decodable, Identifiable {
    var id: String {
        return objectID
    }
    let objectID: String
    let points: Int
    let title: String
    let url: String?
}
