import { Component } from "@angular/core";
import type IFilme from "../model/IFilme";
import { filmes } from "../fake-api/fake-query-return";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor() {}

  listaFilmes: IFilme[] = filmes;
}
