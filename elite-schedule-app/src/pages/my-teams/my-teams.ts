import {Component }from '@angular/core'; 
import {IonicPage, NavController, NavParams, LoadingController }from 'ionic-angular'; 
import {TournamentsPage }from '../tournaments/tournaments'; 
import {EliteApi, UserSettings }from '../../shared/shared'; 
import {TeamHomePage }from '../pages'; 
/**
 * Generated class for the MyTeams page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info * on Ionic pages and navigation. */
@IonicPage()
@Component( {
  selector:'page-my-teams', 
  templateUrl:'my-teams.html', 
})
export class MyTeamsPage {

  favorites = []

  constructor(
    public navCtrl:NavController,
    public navParams:NavParams, 
    private loadingController:LoadingController,
    private eliteApi:EliteApi,
    private userSettings:UserSettings) {
  }

  ionViewDidEnter() {
    this.favorites = this.userSettings.getAllFavorite()
    console.log('ionViewDidLoad MyTeams')
  }

  goToTournaments() {
    this.navCtrl.push(TournamentsPage)
  }

  favoriteTapped($event, favorite) {
    let loader = this.loadingController.create( {
      content:'Getting data.....', 
      dismissOnPageChange:true
    })
    loader.present()
    this.eliteApi.getTournamentData(favorite.tournamentId).subscribe(t => this.navCtrl.push(TeamHomePage, favorite.team))
  }
}
