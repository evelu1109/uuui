import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BackgroundHeaderComponent } from './background-header/background-header.component';
import { VerTodasButtonComponent } from './ver-todas-button/ver-todas-button.component';

import { HttpClientModule } from '@angular/common/http';
import { PageAyudaComponent } from './ayuda/page-ayuda/page-ayuda.component';
import { PageContactoComponent } from './contacto/page-contacto/page-contacto.component';
import { PageInicioComponent } from './inicio/page-inicio/page-inicio.component';
import { PageIniciarSesionComponent } from './iniciar-sesion/page-iniciar-sesion/page-iniciar-sesion.component';
import { PagePublicacionesComponent } from './publicaciones/page-publicaciones/page-publicaciones.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardPostOneComponent } from './card-post-one/card-post-one.component';
import { CardPostTwoComponent } from './card-post-two/card-post-two.component';
import { CardsSectionTwoComponent } from './cards-section-two/cards-section-two.component';
import { CardsSectionOneComponent } from './cards-section-one/cards-section-one.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { VerMasComponent } from './ver-mas/ver-mas/ver-mas.component';
import { DatabaseinfoService } from './services/databaseinfo.service';
import { FooterComponent } from './footer/footer.component';
import { TodasLasFotosComponent } from './todas-las-fotos/todas-las-fotos.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageAyudaComponent,
    PageContactoComponent,
    PageInicioComponent,
    PageIniciarSesionComponent,
    PagePublicacionesComponent,
    NavBarComponent,
    CardPostOneComponent,
    CardPostTwoComponent,
    CardsSectionOneComponent,
    AppComponent,
    FullscreenComponent,
    VerMasComponent,
    BackgroundHeaderComponent,
    VerTodasButtonComponent,
    CardsSectionTwoComponent,
    FooterComponent,
    TodasLasFotosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [DatabaseinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
