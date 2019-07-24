import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarComponent } from './administrar/administrar.component';
import { DadoComponent } from './dado/dado.component';

const routes: Routes = [

  { path: 'administrador', component: AdministrarComponent },
  { path: 'dado', component: DadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
