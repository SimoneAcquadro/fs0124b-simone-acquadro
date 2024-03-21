import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'./pages/contatti',
    component: ContattiComponent
  },
  {
    path:'app-chi-siamo',
    component: ChiSiamoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
