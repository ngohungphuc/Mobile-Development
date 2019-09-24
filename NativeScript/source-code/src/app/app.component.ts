import { Component } from "@angular/core";

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  activeChallenges: string[] = [];

  onChallengeInput(desc: string) {
    this.activeChallenges.push(desc);
  }
}
