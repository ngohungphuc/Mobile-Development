import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
  { path: "", component: AuthComponent },
  {
    path: "challenges",
    loadChildren: () =>
      import("./challenges/challenges.module").then(c => c.ChanllengesModule)
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
