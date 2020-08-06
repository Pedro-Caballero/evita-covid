import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CubrebocasComponent } from './components/cubrebocas/cubrebocas.component';
import { GelComponent } from './components/gel/gel.component';
import { GuantesComponent } from './components/guantes/guantes.component';
import { TermometrosComponent } from './components/termometros/termometros.component';
import { TapetesComponent } from './components/tapetes/tapetes.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CaretasComponent } from './components/caretas/caretas.component';
import { LentesComponent } from './components/lentes/lentes.component';
import { SenalizacionesComponent } from './components/senalizaciones/senalizaciones.component';
import { VariosComponent } from './components/varios/varios.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CubrebocasComponent,
    GelComponent,
    GuantesComponent,
    TermometrosComponent,
    TapetesComponent,
    BuscarComponent,
    CaretasComponent,
    LentesComponent,
    SenalizacionesComponent,
    VariosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
