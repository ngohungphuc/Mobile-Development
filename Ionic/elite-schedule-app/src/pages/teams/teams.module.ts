import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamsPage } from './teams';

@NgModule({
    declarations: [
        TeamsPage,
    ],
    imports: [
        IonicPageModule.forChild(TeamsPage),
    ],
    exports: [
        TeamsPage
    ]
})
export class TeamsModule { }