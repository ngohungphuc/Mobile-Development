import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
  selector: "ns-day-modal",
  templateUrl: "./day-modal.component.html",
  styleUrls: ["./day-modal.component.css"]
})
export class DayModalComponent implements OnInit {
  public loadedDate: Date;

  constructor(private modelParams: ModalDialogParams) {}

  ngOnInit() {
    this.loadedDate = (this.modelParams.context as { date: Date }).date;
  }

  onHandleInput(action: string) {
    this.modelParams.closeCallback(action);
  }
}
