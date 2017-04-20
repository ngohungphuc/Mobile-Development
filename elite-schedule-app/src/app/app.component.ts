import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TournamentsPage, MyTeamsPage } from '../pages/pages';
import { EliteApi,UserSettings } from '../shared/shared';
@Component({
    templateUrl: 'app.html',
    providers: [
        EliteApi,
        UserSettings
    ]
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = MyTeamsPage;

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            //{ title: 'List', component: ListPage }
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    goHome() {
        this.nav.push(MyTeamsPage)
    }

    goToTournaments() {
        this.nav.push(TournamentsPage)
    }
}