import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageContactoComponent } from './contacto/page-contacto/page-contacto.component';
import { PageIniciarSesionComponent } from './iniciar-sesion/page-iniciar-sesion/page-iniciar-sesion.component';
import { PageInicioComponent } from './inicio/page-inicio/page-inicio.component';
import { VerMasComponent } from './ver-mas/ver-mas/ver-mas.component';
import { TodasLasFotosComponent } from './todas-las-fotos/todas-las-fotos.component';

const routes: Routes = [

    {path: 'inicio', component: PageInicioComponent},
    {path: 'publicaciones', component: TodasLasFotosComponent},
    {path: 'contacto', component: PageContactoComponent},
    {path: 'iniciar sesion', component: PageIniciarSesionComponent},
    {path: 'post/:variable', component: VerMasComponent},
    {path: "**", pathMatch: 'full', redirectTo:'inicio'},
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]})

export class AppRoutingModule { }