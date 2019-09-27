import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef
} from "@angular/core";
import { Subscription } from "rxjs";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { UIService } from "./shared/ui.service";
import { ViewContainerRef } from "@angular/core";

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(RadSideDrawerComponent, { static: false })
  drawerComponent: RadSideDrawerComponent;
  private drawerSub: Subscription;
  private drawer: RadSideDrawer;
  constructor(
    private uIService: UIService,
    private changeDectionRef: ChangeDetectorRef,
    private vcRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.drawerSub = this.uIService.drawerState.subscribe(_ => {
      if (this.drawer) {
        this.drawer.toggleDrawerState();
      }
    });
    this.uIService.setRootVCRef(this.vcRef);
  }

  ngAfterViewInit(): void {
    this.drawer = this.drawerComponent.sideDrawer;
    this.changeDectionRef.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.drawerSub) {
      this.drawerSub.unsubscribe();
    }
  }

  onLogout() {
    this.uIService.toggleDrawer();
  }
}
