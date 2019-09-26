import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PageRoute } from "nativescript-angular/router";

@Component({
  selector: "ns-challenge-edit",
  templateUrl: "./challenge-edit.component.html",
  styleUrls: ["./challenge-edit.component.css"]
})
export class ChallengeEditComponent implements OnInit {
  isCreating = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pageRoute: PageRoute
  ) {}

  ngOnInit(): void {
    /* this.activatedRoute.paramMap.subscribe(paramMap => {}); */
    this.pageRoute.activatedRoute.subscribe(activatedRoute => {
      activatedRoute.paramMap.subscribe(paramMap => {
        console.log(paramMap.get("mode"));
        if (!paramMap.has("mode")) {
          this.isCreating = true;
        } else {
          this.isCreating = paramMap.get("mode") !== "edit";
        }
      });
    });
  }
}
