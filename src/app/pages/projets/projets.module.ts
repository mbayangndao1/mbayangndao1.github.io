import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetsRoutingModule } from './projets-routing.module';
import {ProjetsComponent} from "./projets.component";
import {CardModule} from "primeng/card";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";
@NgModule({
  declarations: [ProjetsComponent],
  imports: [
    CommonModule,
    ProjetsRoutingModule,
    CardModule,
    TagModule,
    ButtonModule
  ]
})
export class ProjetsModule { }
