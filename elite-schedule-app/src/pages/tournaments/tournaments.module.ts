import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TournamentsPage } from './tournaments';

@NgModule({
  declarations: [
    TournamentsPage,
  ],
  imports: [
    //IonicModule.forChild(Tournaments),
  ],
  exports: [
      TournamentsPage
  ]
})
export class TournamentsModule {}
