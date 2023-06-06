import { Component, OnInit } from '@angular/core';

import type IAtores from '../model/IAtores';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ToastController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-ator-detalhe',
  templateUrl: './ator-detalhe.page.html',
  styleUrls: ['./ator-detalhe.page.scss'],
})
export class AtorDetalhePage implements OnInit {

  ator?: IAtores

  constructor(private route: ActivatedRoute, private router: Router, public alertController: AlertController, public toastController: ToastController) { }


  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const getNav = this.router.getCurrentNavigation()

      if (getNav?.extras.state) {
        this.ator = getNav.extras.state['paramAtor'];
      }
      
      console.log(this.ator)

    })
  }


  async exibirAlertaFavorito(ator: IAtores) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a ator?',
      buttons: [
        {
          text: 'Não',
          //role: 'cancel',
          handler: () => {
            ator.favorito = false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            ator.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

 async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'ator adicionada aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }


}
