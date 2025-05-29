import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloListadoComponent } from './modulo-listado/modulo-listado.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: "modulos", component: ModuloListadoComponent},
  {path: "", component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
