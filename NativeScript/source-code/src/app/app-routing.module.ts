import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";
import { TodayComponent } from "./challenges/today/today.component";
import { CurrentChallengeComponent } from "./challenges/current-challenge/current-challenge.component";
import { ChallengeEditComponent } from "./challenges/challenge-edit/challenge-edit.component";
import { ChallengeTabsComponent } from "./challenges/challenge-tabs/challenge-tabs.component";

const routes: Routes = [
  { path: "", component: AuthComponent },
  {
    path: "challenges",
    children: [
      {
        path: "",
        component: ChallengeTabsComponent,
        children: [
          { path: ":mode", component: ChallengeEditComponent },
          { path: "today", component: TodayComponent, outlet: "today" },
          {
            path: "current-challenge",
            component: CurrentChallengeComponent,
            outlet: "currentChallenge"
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
