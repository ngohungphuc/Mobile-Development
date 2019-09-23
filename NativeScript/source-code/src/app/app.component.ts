import { Component } from "@angular/core";

@Component({
  selector: "ns-app",
  moduleId: module.id,
  templateUrl: "./app.component.html"
})
export class AppComponent {
  enteredChallenge = "";
  onChallengeInput(desc: string) {
    this.enteredChallenge = desc;
  }
}
