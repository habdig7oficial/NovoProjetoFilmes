import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import type IAtores from "../model/IAtores";
import { atores } from "../fake-api/fake-query-return";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],

})
export class Tab3Page {
  atores: IAtores[] = atores
  constructor() {}
}
