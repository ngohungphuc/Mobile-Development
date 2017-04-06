import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyTeamsPage } from './my-teams';

@NgModule({
  declarations: [
      MyTeamsPage,
  ],
  imports: [
    //IonicModule.forChild(MyTeams),
  ],
  exports: [
      MyTeamsPage
  ]
})
export class MyTeamsModule {}
