import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TournamentsPage } from './tournaments';

@NgModule({
    declarations: [
        TournamentsPage,
    ],
    imports: [
        IonicPageModule.forChild(TournamentsPage),
    ],
    exports: [
        TournamentsPage
    ]
})
export class TournamentsModule { }