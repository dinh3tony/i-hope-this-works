import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';

import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'new',component: NewComponent },
  { path: 'edit/:id',component: EditComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
