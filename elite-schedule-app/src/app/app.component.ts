import {Component, ViewChild }from '@angular/core'; 
import {Events, Nav, Platform, LoadingController }from 'ionic-angular'; 
import {StatusBar }from '@ionic-native/status-bar'; 
import {SplashScreen }from '@ionic-native/splash-screen'; 
import {TournamentsPage, TeamHomePage, MyTeamsPage }from '../pages/pages'; 
import {EliteApi, UserSettings }from '../shared/shared'; 
@Component( {
    templateUrl:'app.html', 
    providers:[
        EliteApi, 
        UserSettings
    ]
})
export class MyApp {
    @ViewChild(Nav)nav:Nav

    rootPage:any = MyTeamsPage
    favoriteTeams:any[]
    pages:Array <  {title:string, component:any } > 

    constructor(
        public platform:Platform, 
        public statusBar:StatusBar, 
        public splashScreen:SplashScreen, 
        private userSettings:UserSettings, 
        private loadingController:LoadingController, 
        private eliteApi:EliteApi, 
        private events:Events) {
        this.initializeApp(); 

        // used for an example of ngFor and navigation
        this.pages = [
            //{ title: 'List', component: ListPage }
        ]; 
    }

    initializeApp() {
        this.platform.ready().then(() =>  {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault()
            this.splashScreen.hide()
            this.refreshFavorites()
            //invoke refreshFavorites whenever favorite change
            this.events.subscribe('favorites:changed',()=> this.refreshFavorites())
        }); 
    }

    goHome() {
        this.nav.push(MyTeamsPage)
    }

    goToTournaments() {
        this.nav.push(TournamentsPage)
    }

    refreshFavorites() {
        this.favoriteTeams = this.userSettings.getAllFavorite()
    }

    goToTeam(fav) {
        let loader = this.loadingController.create( {
            content:'Getting Data....', 
            dismissOnPageChange:true
        })
        loader.present()
        this.eliteApi.getTournamentData(fav.tournamentId).subscribe(l => this.nav.push(TeamHomePage, fav.team))
    }
}