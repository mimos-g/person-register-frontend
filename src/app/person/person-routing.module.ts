import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDeleteComponent } from './person-delete/person-delete.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonIndexComponent } from './person-index/person-index.component';
import { PersonNewComponent } from './person-new/person-new.component';
import { PersonShowComponent } from './person-show/person-show.component';

const routes: Routes = [
  { path: '', redirectTo: 'person' },
  // { path: '', component: PersonIndexComponent },
  {
    path: 'person',
    component: PersonIndexComponent
  },
  {
    path: 'person/new',
    component: PersonNewComponent
  },
  {
    path: 'person/show',
    component: PersonShowComponent
  },
  {
    path: 'person/edit',
    component: PersonEditComponent
  },
  {
    path: 'person/delete',
    component: PersonDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
