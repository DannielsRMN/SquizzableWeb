import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Estilo General
import { ApplicationConfig } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Material from '@primeng/themes/material';
import Aura from '@primeng/themes/aura';

// Menu
import { Menubar } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

// Componente
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Menubar,
    ButtonModule,
    CardModule,
    TableModule,
    SliderModule,
    FormsModule,
    BrowserAnimationsModule,
    MenubarModule,
    PanelMenuModule,
    ReactiveFormsModule,
    MenuModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Material,
        options: {
          darkModeSelector: '.dk'
        }      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
