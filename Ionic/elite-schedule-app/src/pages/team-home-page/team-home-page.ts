import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StandingsPage, TeamDetailPage } from '../pages';
/**
 * Generated class for the TeamHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-team-home-page',
    templateUrl: 'team-home-page.html',
})
export class TeamHomePage {
    team: any
    teamDetailTab = TeamDetailPage
    stadingsTab = StandingsPage
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.team = this.navParams.data
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TeamHomePage');
    }

    goHome() {
        //this.navCtrl.push(MyTeamsPage)
        this.navCtrl.popToRoot()
    }
}