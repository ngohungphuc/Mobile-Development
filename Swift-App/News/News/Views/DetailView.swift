//
//  DetailView.swift
//  News
//
//  Created by Ngo Hung Phuc on 09/05/2021.
//

import SwiftUI

struct DetailView: View {
    let url: String?
    var body: some View {
        WebView(urlString: url)
    }
}

struct DetailView_Previews: PreviewProvider {
    static var previews: some View {
        DetailView(url: "")
    }
}
