import { Component } from "@angular/core";
import ISerie from "../model/ISerie";
import { series } from "../fake-api/fake-query-return";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  listaSeries: ISerie[] = series
  constructor(public router: Router,) {}


  SendSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state: {paramSerie: serie}}
    this.router.navigate(["serie-detalhe"], navigationExtras)
  }

}
