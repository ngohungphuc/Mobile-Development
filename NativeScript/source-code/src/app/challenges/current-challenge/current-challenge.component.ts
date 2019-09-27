import { Component, ViewContainerRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { DayModalComponent } from "../day-modal/day-modal.component";
import { UIService } from "../../shared/ui.service";
@Component({
  selector: "ns-current-challenge",
  templateUrl: "./current-challenge.component.html",
  styleUrls: ["./current-challenge.component.css"]
})
export class CurrentChallengeComponent {
  constructor(
    private router: RouterExtensions,
    private modelDialog: ModalDialogService,
    private vcRef: ViewContainerRef,
    private uIService: UIService
  ) {}

  onEdit() {
    this.router.navigate(["/challenges/edit"], {
      transition: { name: "slideLeft" }
    });
  }

  onChangeStatus() {
    this.modelDialog.showModal(DayModalComponent, {
      fullscreen: true,
      viewContainerRef: this.uIService.getRootVCRef()
        ? this.uIService.getRootVCRef()
        : this.vcRef,
      context: {
        date: new Date()
      }
    }).then((action:string) => {
      console.log(action);
    });
  }
}
