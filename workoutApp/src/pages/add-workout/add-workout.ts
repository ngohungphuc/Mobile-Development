import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from '../../app/services/workout.service';
import {WorkoutsPage} from '../workouts/workouts';
/*
  Generated class for the AddWorkout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html',
  providers: [WorkoutService]
})
export class AddWorkoutPage {
  title: any;
  note: any;
  type: any;
  result: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public workoutService: WorkoutService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWorkoutPage');
  }

  onSubmit() {
    var workout = {
      title: this.title,
      note: this.note,
      type: this.type
    };
    console.log(workout);
    this.workoutService.addWorkOut(workout).subscribe(data => {
      this.result = data
    }, err => console.log(err), () => console.log('Workout Added'));

    this.navCtrl.setRoot(WorkoutsPage);
  }
}
