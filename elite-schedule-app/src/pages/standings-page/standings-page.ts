import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../shared/shared';
import * as _ from 'lodash';
/**
 * Generated class for the StandingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-standings-page',
  templateUrl: 'standings-page.html',
})
export class StandingsPage {
  allStandings: any[]
  standings: any[]
  team: any
  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    this.team = this.navParams.data
    let tournamentData = this.eliteApi.getCurrentTournament()
    this.standings = tournamentData.standings

    this.allStandings = _.chain(this.standings)
      .groupBy('division')
      .toPairs()
      .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
      .value()

    console.log('this standings', this.standings)
    console.log('division standing', this.allStandings)
  }

}
