import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllComponent } from './pages/all/all.component'
import { CompletedComponent } from './pages/completed/completed.component'
import { UncompletedComponent } from './pages/uncompleted/uncompleted.component'

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: AllComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'uncompleted', component: UncompletedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
