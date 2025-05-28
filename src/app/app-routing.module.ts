import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloListadoComponent } from './modulo-listado/modulo-listado.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: "modulos", component: ModuloListadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
