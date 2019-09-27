import { Component, ViewContainerRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { DayModalComponent } from "../day-modal/day-modal.component";
@Component({
  selector: "ns-current-challenge",
  templateUrl: "./current-challenge.component.html",
  styleUrls: ["./current-challenge.component.css"]
})
export class CurrentChallengeComponent {
  constructor(
    private router: RouterExtensions,
    private modelDialog: ModalDialogService,
    private vcRef: ViewContainerRef
  ) {}

  onEdit() {
    this.router.navigate(["/challenges/edit"], {
      transition: { name: "slideLeft" }
    });
  }

  onChangeStatus() {
    this.modelDialog.showModal(DayModalComponent, {
      fullscreen: true,
      viewContainerRef: this.vcRef
    });
  }
}
