import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import 'rxjs'
import { Observable } from 'rxjs/Observable'
@Injectable()
export class EliteApi {
    private baseUrl = 'https://elite-schedule-app-20dc8.firebaseio.com/'
    private tourneyData = {}
    currentTournament: any = {}
    constructor(private http: Http) {
    }

    getTournaments() {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments.json`)
                .subscribe(res => resolve(res.json()))
        })
    }

    getTournamentData(tournamentId,forceRefresh:boolean=false): Observable<any> {
        if(!forceRefresh && this.tourneyData[tournamentId]){
            this.currentTournament = this.tourneyData[tournamentId]
            console.log('just return data')
            return Observable.of(this.currentTournament)
        }

        //dont have data
        console.log('make http call')
        return this.http.get(`${this.baseUrl}/tournaments-data/${tournamentId}.json`)
            .map((response: Response) => {
                this.tourneyData[tournamentId] = response.json()
                this.currentTournament = this.tourneyData[tournamentId]
                return this.currentTournament
            })
    }

    getCurrentTournament() {
        return this.currentTournament
    }

    refreshCurrentTournament(){
        return this.getTournamentData(this.currentTournament.tournament.id,true)
    }
}