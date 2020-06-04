import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreatePointComponent } from './components/create-point/create-point.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-point', component: CreatePointComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
