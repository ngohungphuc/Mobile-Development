import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from '../../app/services/workout.service';
import {WorkoutDetailPage} from '../workout-detail/workout-detail';
/*
  Generated class for the Workouts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
  providers: [WorkoutService]
})
export class WorkoutsPage implements OnInit {
  workouts: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public workoutService: WorkoutService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutsPage');
  }

  ngOnInit() {
    this.workoutService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    });
  }

  workoutSelected(event, workout) {
    this.navCtrl.push(WorkoutDetailPage, { workout: workout });
  }
}
