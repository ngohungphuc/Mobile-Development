import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from '../../app/services/workout.service';
import {WorkoutsPage} from '../workouts/workouts';
/*
  Generated class for the WorkoutDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workout-detail',
  templateUrl: 'workout-detail.html',
  providers: [WorkoutService]
})
export class WorkoutDetailPage {
  workout: any;
  result: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public workoutService: WorkoutService) {
    this.workout = this.navParams.get('workout');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutDetailPage');
  }

  deleteWorkout(workoutId) {
    this.workoutService.deleteWorkOut(workoutId).subscribe(data => {
      this.result = data
    }, err => console.log(err), () => console.log('Workout Deleted'));

    this.navCtrl.setRoot(WorkoutsPage);
  }
}
