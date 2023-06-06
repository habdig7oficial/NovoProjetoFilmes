import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import type IAtores from "../model/IAtores";
import { atores } from "../fake-api/fake-query-return";

import { Router, NavigationExtras } from "@angular/router";


@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],

})
export class Tab3Page {
  atores: IAtores[] = atores
  constructor(public router: Router,) {}

  SendAtor(ator: IAtores){
    const navigationExtras: NavigationExtras = {state: {paramAtor: ator}}
    this.router.navigate(["ator-detalhe"], navigationExtras)
  }

}
