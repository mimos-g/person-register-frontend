import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonIndexComponent } from './person-index/person-index.component';
import { PersonNewComponent } from './person-new/person-new.component';
import { PersonShowComponent } from './person-show/person-show.component';

const routes: Routes = [
  { path: '', redirectTo: 'person' },
  {
    path: 'person',
    component: PersonIndexComponent
  },
  {
    path: 'person/new',
    component: PersonNewComponent
  },
  {
    path: 'person/show/:id',
    component: PersonShowComponent
  },
  {
    path: 'person/edit/:id',
    component: PersonEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
