import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TeamDetail } from './team-detail';

@NgModule({
  declarations: [
    TeamDetail,
  ],
  imports: [
    IonicModule.forChild(TeamDetail),
  ],
  exports: [
    TeamDetail
  ]
})
export class TeamDetailModule {}
