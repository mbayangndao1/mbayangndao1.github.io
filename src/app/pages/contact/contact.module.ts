import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import {ContactComponent} from "./contact.component";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {CardModule} from "primeng/card";
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    CardModule,
    DividerModule,
    ButtonModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule
  ]
})
export class ContactModule { }
