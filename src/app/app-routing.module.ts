import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: "login", component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: "inicio", component: InicioComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
