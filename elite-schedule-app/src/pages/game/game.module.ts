import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { GamePage } from './game';

@NgModule({
  declarations: [
      GamePage,
  ],
  imports: [
    //IonicModule.forChild(Game),
  ],
  exports: [
      GamePage
  ]
})
export class GameModule {}
