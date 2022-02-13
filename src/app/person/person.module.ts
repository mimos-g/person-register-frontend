import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonIndexComponent } from './person-index/person-index.component';
import { PersonNewComponent } from './person-new/person-new.component';
import { PersonShowComponent } from './person-show/person-show.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonDeleteComponent } from './person-delete/person-delete.component';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { PersonEditComponent } from './person-edit/person-edit.component';


@NgModule({
  declarations: [
    PersonIndexComponent,
    PersonNewComponent,
    PersonShowComponent,
    PersonFormComponent,
    PersonDeleteComponent,
    PersonEditComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    AngularMaterialModule
  ]
})
export class PersonModule { }
