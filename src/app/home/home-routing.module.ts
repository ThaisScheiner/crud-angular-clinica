import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicoCadComponent } from './medico-cad/medico-cad.component';
import { ClienteCadComponent } from './cliente-cad/cliente-cad.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'medico', component: MedicoCadComponent},
  { path: 'cliente', component: ClienteCadComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
