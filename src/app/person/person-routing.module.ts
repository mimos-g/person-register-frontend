import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonIndexComponent } from './person-index/person-index.component';
import { PersonShowComponent } from './person-show/person-show.component';

const routes: Routes = [
  { path: '', redirectTo: 'person' },
  // { path: '', component: PersonIndexComponent },
  {
    path: 'person',
    component: PersonIndexComponent
  },
  {
    path: 'person/add',
    component: PersonShowComponent
  },
  {
    path: 'person/show',
    component: PersonShowComponent
  },
  {
    path: 'person/edit',
    component: PersonShowComponent
  },
  {
    path: 'person/delete',
    component: PersonShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
