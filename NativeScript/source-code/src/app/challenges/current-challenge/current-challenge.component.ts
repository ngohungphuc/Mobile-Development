import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "ns-current-challenge",
  templateUrl: "./current-challenge.component.html",
  styleUrls: ["./current-challenge.component.css"]
})
export class CurrentChallengeComponent {
  constructor(private router: RouterExtensions) {}

  onEdit() {
    this.router.navigate(["/challenges/edit"], {
      transition: { name: "slideLeft" }
    });
  }
}
