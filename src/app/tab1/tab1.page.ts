import { Component } from "@angular/core";
import type IFilme from "../model/IFilme";
import { filmes } from "../fake-api/fake-query-return";

import { Router, NavigationExtras } from "@angular/router";

import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  listaFilmes: IFilme[] = filmes;

  constructor(public router: Router, public alertController: AlertController, public toastController: ToastController) {}

  SendFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state: {paramFilme: filme}}
    this.router.navigate(["filme-detalhe"], navigationExtras)
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          //role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

 async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

}
