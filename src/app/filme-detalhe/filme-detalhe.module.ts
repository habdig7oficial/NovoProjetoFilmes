import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmeDetalhePageRoutingModule } from './filme-detalhe-routing.module';

import { FilmeDetalhePage } from './filme-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeDetalhePageRoutingModule,
    NgIf, 
    NgFor
  ],
  declarations: [FilmeDetalhePage]
})
export class FilmeDetalhePageModule {}
