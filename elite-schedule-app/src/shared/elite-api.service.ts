import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'

@Injectable()
export class EliteApi {
    private baseUrl = 'https://elite-schedule-app-20dc8.firebaseio.com/'
    constructor(private http: Http) {
    }

    getTournament() {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments.json`)
                .subscribe(res => resolve(res.json()))
        })
    }
}