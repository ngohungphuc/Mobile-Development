import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyTeamsPage, GamePage } from '../pages';
import * as _ from 'lodash';
import * as moment from 'moment';
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
	allGames: any[]
	dateFilter: string
	games: any[]
	team: any
	teamStanding: any
	private tournamentData: any
	constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi) {
	}

	ionViewCanEnter() {
		this.team = this.navParams.data
		this.tournamentData = this.eliteApi.getCurrentTournament()
		this.teamStanding = _.find(this.tournamentData.standings, { 'teamId': this.team.id })

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
		this.allGames = this.games
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
	gameClick($event, game) {
		let sourceGame = this.tournamentData.games.find(g => g.id === game.gameId)
		this.navCtrl.parent.parent.push(GamePage, sourceGame)
	}
	goHome() {
		//this.navCtrl.push(MyTeamsPage)
		//this.nav.popToRoot()
		this.navCtrl.parent.parent.popToRoot()
	}

	/**
	 * time for the game is same for date filter
	 * @return {[type]} [description]
	 */
	dateChanged() {
		this.games = _.filter(this.allGames, g => moment(g.time).isSame(this.dateFilter, 'day'))
	}
}
