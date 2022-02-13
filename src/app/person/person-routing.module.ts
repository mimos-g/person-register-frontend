import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonIndexComponent } from './person-index/person-index.component';

const routes: Routes = [
  { path: '', component: PersonIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
