import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetsRoutingModule } from './projets-routing.module';
import {ProjetsComponent} from "./projets.component";
@NgModule({
  declarations: [ProjetsComponent],
  imports: [
    CommonModule,
    ProjetsRoutingModule
  ]
})
export class ProjetsModule { }
