import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { UIService } from "./shared/ui.service";

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, OnDestroy {
  private drawerSub: Subscription;
  constructor(private uIService: UIService) {}

  ngOnInit(): void {
    this.drawerSub = this.uIService.drawerState.subscribe(x=> {
      console.log('x');
    });
  }

  ngOnDestroy(): void {
    if (this.drawerSub) {
      this.drawerSub.unsubscribe();
    }
  }
}
