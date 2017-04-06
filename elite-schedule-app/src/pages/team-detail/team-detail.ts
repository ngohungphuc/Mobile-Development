import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeamDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-team-detail',
    templateUrl: 'team-detail.html',
})
export class TeamDetailPage {
    team: any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.team = this.navParams.data
        console.log(this.navParams)
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TeamDetail');
    }
}