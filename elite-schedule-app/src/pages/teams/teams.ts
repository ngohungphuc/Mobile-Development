import {Component }from '@angular/core'; 
import {IonicPage, NavController, NavParams, LoadingController }from 'ionic-angular'; 
import {TeamHomePage }from '../pages'; 
import {EliteApi }from '../../shared/shared'; 
import * as _  from 'lodash'; 
/**
 * Generated class for the Teams page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info * on Ionic pages and navigation. */
@IonicPage()
@Component( {
  selector:'page-teams', 
  templateUrl:'teams.html', 
})
export class TeamsPage {
  private allTeams:any
  private allTeamDivisions:any
  teams = []
  queryText:string
  constructor(public navCtrl:NavController, public navParams:NavParams, private eliteApi:EliteApi, private loadingController:LoadingController) {
  }


  /**
   * The tournament select by user and pass along with params
   * Each item will have a divisionName and array of divisionTeams
   * @return {[type]} [description]
   */
  ionViewWillEnter() {
    let selectedTournament = this.navParams.data

    let loader = this.loadingController.create( {
      content:'Getting data.....'
    })
    loader.present().then(() =>  {
      this.eliteApi.getTournamentData(selectedTournament.id).subscribe(data =>  {
        this.allTeams = data.teams
        this.allTeamDivisions = _.chain(data.teams)
          .groupBy('division')
          .toPairs()
          .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
          .value()
        this.teams = this.allTeamDivisions
        console.log('division Teams', this.teams)
        loader.dismiss()
      })
    })

  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team)
  }

  updateTeams() {
    let queryTextLower = this.queryText.toLowerCase()
    let filterTeams = []
    _.forEach(this.allTeamDivisions, td =>  {
      let teams = _.filter(td.divisionTeams, t => ( < any > t).name.toLowerCase().includes(queryTextLower))
      if (teams.length) {
        filterTeams.push( {divisionName:td.divisionName, divisionTeams:teams})
      }
    })

    this.teams = filterTeams
  }
}
