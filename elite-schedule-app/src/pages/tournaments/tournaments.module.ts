import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Tournaments } from './tournaments';

@NgModule({
  declarations: [
    Tournaments,
  ],
  imports: [
    IonicModule.forChild(Tournaments),
  ],
  exports: [
    Tournaments
  ]
})
export class TournamentsModule {}
