import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TeamDetailPage } from './team-detail';

@NgModule({
  declarations: [
      TeamDetailPage,
  ],
  imports: [
    //IonicModule.forChild(TeamDetail),
  ],
  exports: [
      TeamDetailPage
  ]
})
export class TeamDetailModule {}
