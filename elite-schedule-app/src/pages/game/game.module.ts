import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Game } from './game';

@NgModule({
  declarations: [
    Game,
  ],
  imports: [
    IonicModule.forChild(Game),
  ],
  exports: [
    Game
  ]
})
export class GameModule {}
