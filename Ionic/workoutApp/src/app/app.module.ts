import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import {WorkoutsPage} from '../pages/workouts/workouts';
import {AddWorkoutPage} from '../pages/add-workout/add-workout';
import {WorkoutDetailPage} from '../pages/workout-detail/workout-detail';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    WorkoutsPage,
    AddWorkoutPage,
    WorkoutDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    WorkoutsPage,
    AddWorkoutPage,
    WorkoutDetailPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
