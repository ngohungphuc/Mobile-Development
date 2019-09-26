import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class UIService {
  private _drawerState = new BehaviorSubject<void>(null);

  get drawerState() {
    return this._drawerState.asObservable();
  }

  toggleDrawer() {
    this._drawerState.next();
  }
}
