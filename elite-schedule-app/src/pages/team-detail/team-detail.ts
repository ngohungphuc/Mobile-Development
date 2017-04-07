import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyTeamsPage } from '../pages';
import * as _ from 'lodash';
import { EliteApi } from '../../shared/shared';
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
    games: any[]
    team: any
    private tournamentData: any
    constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi) {
    }

    ionViewWillEnter() {
        this.team = this.navParams.data
        this.tournamentData = this.eliteApi.getCurrentTournament()

        this.games = _.chain(this.tournamentData.games)
            .filter(g => g.team1Id === this.team.id || g.team2Id === this.team.id)
            .map(g => {
                let isTeam1 = (g.team1Id === this.team.id);
                let opponentName = isTeam1 ? g.team2 : g.team1;
                let scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
                return {
                    gameId: g.id,
                    opponent: opponentName,
                    time: Date.parse(g.time),
                    location: g.location,
                    locationUrl: g.locationUrl,
                    scoreDisplay: scoreDisplay,
                    homeAway: (isTeam1 ? "vs." : "at")
                };
            })
            .value()
    }

    getScoreDisplay(isTeam1, team1Score, team2Score) {
        if (team1Score && team2Score) {
            var teamScore = (isTeam1 ? team1Score : team2Score);
            var opponentScore = (isTeam1 ? team2Score : team1Score);
            var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
            return winIndicator + teamScore + "-" + opponentScore;
        }
        else {
            return "";
        }
    }

    goHome() {
        //this.navCtrl.push(MyTeamsPage)
        //this.nav.popToRoot()
        this.navCtrl.parent.parent.popToRoot()
    }
}