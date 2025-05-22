import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';

const routes: Routes = [
  {path: "Dashboard-Usuario", component: DashboardUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
