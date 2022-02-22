import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {AuxiliosComponent} from './views/auxilios/auxilios.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
},
{
  path: "auxilios",
  component: AuxiliosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
