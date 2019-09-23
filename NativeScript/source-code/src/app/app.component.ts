import { Component } from "@angular/core";

@Component({
  selector: "ns-app",
  moduleId: module.id,
  templateUrl: "./app.component.html"
})
export class AppComponent {
  activeChallenges: string[] = [];

  onChallengeInput(desc: string) {
    this.activeChallenges.push(desc);
  }
}
