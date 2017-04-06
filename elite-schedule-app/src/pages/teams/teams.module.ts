import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Teams } from './teams';

@NgModule({
  declarations: [
    Teams,
  ],
  imports: [
    IonicModule.forChild(Teams),
  ],
  exports: [
    Teams
  ]
})
export class TeamsModule {}
