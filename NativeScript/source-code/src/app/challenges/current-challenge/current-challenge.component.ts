import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ns-current-challenge",
  templateUrl: "./current-challenge.component.html",
  styleUrls: ["./current-challenge.component.css"],
  moduleId: module.id
})
export class CurrentChallengeComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.challenges);
  }
  @Input() challenges: string[] = [];
}
