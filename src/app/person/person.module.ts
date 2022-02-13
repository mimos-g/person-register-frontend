import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonIndexComponent } from './person-index/person-index.component';
import { PersonNewComponent } from './person-new/person-new.component';
import { PersonShowComponent } from './person-show/person-show.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonDeleteComponent } from './person-delete/person-delete.component';

import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    PersonIndexComponent,
    PersonNewComponent,
    PersonShowComponent,
    PersonFormComponent,
    PersonDeleteComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    MatSliderModule
  ]
})
export class PersonModule { }
