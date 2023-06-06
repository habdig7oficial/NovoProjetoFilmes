import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule, NgFor, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab2Page } from "./tab2.page";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

import { Tab2PageRoutingModule } from "./tab2-routing.module";

import { series } from "../fake-api/fake-query-return";


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    NgIf,
    NgFor,
  ],
  declarations: [Tab2Page],
})
export class Tab2PageModule {
  
}
