import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "ns-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  constructor(private router: RouterExtensions) {}

  ngOnInit() {}

  goSignin() {
    // clear history to remove caching of previous page in the stack
    this.router.navigate(["/today"], { clearHistory: true });
  }
}
