import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./views/home/home.component";
import {AuxiliosComponent} from "./views/auxilios/auxilios.component";
import { ProjetosComponent } from "./views/projetos/projetos.component";

const routes: Routes = [
  {path: "",          component: HomeComponent},
  {path: "auxilios",  component: AuxiliosComponent},
  {path: "projetos",  component: ProjetosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
