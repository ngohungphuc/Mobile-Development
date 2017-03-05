import {Injectable, Inject} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService {
	apiKey: string;
	workoutsUrl: string;
	constructor(public http: Http) {
		console.log('Service connected');
		this.apiKey = 'dFrFMZ2ioAub6AxM6zAOGvQyi68YH3px';
		this.workoutsUrl = 'https://api.mlab.com/api/1/databases/tony_meantodo/collections/workouts?apiKey=Ffjwy52ty8vBUMJbTQv2cRahiU8lpf23';
	}

	getWorkouts() {
		return this.http.get(this.workoutsUrl)
			.map(res => res.json());
	}
}
