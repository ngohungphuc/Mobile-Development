import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "ns-current-challenge",
  templateUrl: "./current-challenge.component.html",
  styleUrls: ["./current-challenge.component.css"]
})
export class CurrentChallengeComponent {
  constructor(private router: Router, private page: Page) {}

  onEdit() {
    this.router.navigate(["/edit-challenge"]);
  }
}
