import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamDetailPage } from './team-detail';

@NgModule({
    declarations: [
        TeamDetailPage,
    ],
    imports: [
        IonicPageModule.forChild(TeamDetailPage),
    ],
    exports: [
        TeamDetailPage
    ]
})
export class TeamDetailModule { }