import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ChallengeEditComponent } from "./challenge-edit.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [ChallengeEditComponent],
  imports: [
    NativeScriptRouterModule.forChild([
      { path: "", component: ChallengeEditComponent }
    ]),
    SharedModule
  ],
  exports: [],
  providers: []
})
export class ChallengeEditModule {}
