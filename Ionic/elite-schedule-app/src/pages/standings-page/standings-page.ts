import {Component }from '@angular/core'; 
import {IonicPage, NavController, NavParams }from 'ionic-angular'; 
import {EliteApi }from '../../shared/shared'; 
import * as _ from 'lodash'; 

@IonicPage()
@Component( {
  selector:'page-standings-page', 
  templateUrl:'standings-page.html', 
})
export class StandingsPage {
  allStandings:any[]
  standings:any[]
  team:any
  divisionFilter = 'division'

  constructor(public navCtrl:NavController, public navParams:NavParams, private eliteApi:EliteApi) {
  }

  ionViewDidLoad() {
    this.team = this.navParams.data
    let tournamentData = this.eliteApi.getCurrentTournament()
    this.standings = tournamentData.standings

    /*this.allStandings = _.chain(this.standings)
      .groupBy('division')
      .toPairs()
      .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
      .value()
    */
    
    this.allStandings = tournamentData.standings
    this.filterDivision()
  }

  filterDivision() {
    if (this.divisionFilter === 'all') {
      this.standings = this.allStandings; 
    }else {
      this.standings = _.filter(this.allStandings, s => s.division === this.team.division); 
    }
  }

  getHeader(record, recordIndex, records) {
    if (recordIndex % 10 === 0 || record.division !== records[recordIndex-1].division) {
      return record.division
    }
    return null
  }
}
