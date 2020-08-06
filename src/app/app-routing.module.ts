import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CubrebocasComponent } from './components/cubrebocas/cubrebocas.component';
import { GelComponent } from './components/gel/gel.component';
import { GuantesComponent } from './components/guantes/guantes.component';
import { TermometrosComponent } from './components/termometros/termometros.component';
import { TapetesComponent } from './components/tapetes/tapetes.component';
import { CaretasComponent } from './components/caretas/caretas.component';
import { LentesComponent } from './components/lentes/lentes.component';
import { SenalizacionesComponent } from './components/senalizaciones/senalizaciones.component';
import { VariosComponent } from './components/varios/varios.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'cubrebocas', component: CubrebocasComponent},
  {path: 'gel-antibacterial-desinfectantes', component: GelComponent},
  {path: 'guantes', component: GuantesComponent},
  {path: 'termometros-infrarrojos', component: TermometrosComponent},
  {path: 'tapete-sanitizante', component: TapetesComponent},
  {path: 'caretas', component: CaretasComponent},
  {path: 'lentes', component: LentesComponent},
  {path: 'senalizaciones', component: SenalizacionesComponent},
  {path: 'varios', component: VariosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
