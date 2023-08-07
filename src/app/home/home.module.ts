import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { MedicoCadComponent } from './medico-cad/medico-cad.component';
import { ClienteCadComponent } from './cliente-cad/cliente-cad.component';

@NgModule({
  declarations: [
    HomeComponent,
    MedicoCadComponent,
    ClienteCadComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule
  ]
})
export class HomeModule { }
