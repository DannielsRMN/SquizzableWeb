import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {path: "inicio", component: InicioComponent, canActivate: [AuthGuard]},
  {path: "", component: InicioComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: "login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
