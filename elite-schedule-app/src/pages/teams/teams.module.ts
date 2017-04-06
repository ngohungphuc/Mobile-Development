import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TeamsPage } from './teams';

@NgModule({
  declarations: [
      TeamsPage,
  ],
  imports: [
    //IonicModule.forChild(Teams),
  ],
  exports: [
      TeamsPage
  ]
})
export class TeamsModule {}
