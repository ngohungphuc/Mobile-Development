import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { isAndroid } from "platform";
import { Page } from "tns-core-modules/ui/page/page";

declare var android: any;

@Component({
  selector: "ns-current-challenge",
  templateUrl: "./current-challenge.component.html",
  styleUrls: ["./current-challenge.component.css"]
})
export class CurrentChallengeComponent {
  constructor(private router: Router, private page: Page) {}

  onEdit() {
    this.router.navigate(["/edit-challenge"]);
  }

  onLoaded() {
    if (isAndroid) {
      const androidToolbar = this.page.actionBar.nativeView;
      const backButton = androidToolbar.getNavigationIcon();

      if (backButton) {
        backButton.setColorFilter(
          android.graphics.Color.parseColor("#171717"),
          (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
        );
      }
    }
  }
}
