import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MyTeamsPage, TeamsPage } from '../pages';
import { EliteApi } from '../../shared/shared';
/**
 * Generated class for the Tournaments page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-tournaments',
    templateUrl: 'tournaments.html',
})
export class TournamentsPage {
    tournaments: any
    constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi, private loadingController: LoadingController) {
    }

    //ionViewDidLoad() {
    //    this.eliteApi.getTournament().then(data => this.tournaments = data)
    //}
    ionViewWillEnter() {
        let loader = this.loadingController.create({
            content: 'Getting tournaments.....',
            //spinner:'dots'
        })
        loader.present().then(() => {
            this.eliteApi.getTournaments().then(data => {
                this.tournaments = data
                loader.dismiss()
            })
        })
    }
    itemTapped($event, tournament) {
        this.navCtrl.push(TeamsPage, tournament)
    }
}