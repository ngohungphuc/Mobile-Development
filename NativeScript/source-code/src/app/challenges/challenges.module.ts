import { NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";

import { ChalengesRoutingModule } from "./challegens-routing.module";
import { ChallengeEditComponent } from "./challenge-edit/challenge-edit.component";
import { CurrentChallengeComponent } from "./current-challenge/current-challenge.component";
import { ChallengeTabsComponent } from "./challenge-tabs/challenge-tabs.component";
import { TodayComponent } from "./today/today.component";

@NgModule({
  imports: [ChalengesRoutingModule, SharedModule, NativeScriptCommonModule],
  declarations: [
    ChallengeEditComponent,
    CurrentChallengeComponent,
    ChallengeTabsComponent,
    TodayComponent
  ]
})
export class ChanllengesModule {}
