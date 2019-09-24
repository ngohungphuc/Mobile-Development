import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { TodayComponent } from './challenges/today/today.component';

const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'today', component: TodayComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
