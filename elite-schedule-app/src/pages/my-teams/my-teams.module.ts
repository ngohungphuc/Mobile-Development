import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyTeams } from './my-teams';

@NgModule({
  declarations: [
    MyTeams,
  ],
  imports: [
    IonicModule.forChild(MyTeams),
  ],
  exports: [
    MyTeams
  ]
})
export class MyTeamsModule {}
