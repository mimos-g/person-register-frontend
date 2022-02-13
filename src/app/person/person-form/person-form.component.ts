import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FORM_ERROR_MESSAGE } from 'src/app/shared/interative-message';
import { Person } from '../model/person';
import { Profession } from '../model/profession';
import { PersonService } from '../service/person.service';
import { ProfessionService } from '../service/profession.service';
import Swal, { SweetAlertResult } from 'sweetalert2'
import { AlertComponent } from 'src/app/shared/alert.component';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit, OnChanges {

  @Input() person!: Person;

  professions$!: Observable<Profession[]>;

  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    profession_id: new FormControl(null, Validators.required),
  })

  constructor(
    private personService: PersonService,
    private professionService: ProfessionService,
    private alertComponent: AlertComponent
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ', changes);
  }

  ngOnInit(): void {
    this.getProfessions();
  }

  formSubmited() {
    if (this.form.valid) {
      const $savePeson: Observable<Person> = this.person
        ? this.personService.updatePerson(this.form.value)
        : this.personService.addPerson(this.form.value);

      $savePeson.subscribe(createdPerson => {
        this.alertComponent.toast('top-end', 'success', 'successfully saved');
        document.getElementById('resetBtn')?.click()
      })
    }
  }

  getProfessions() {
    this.professions$ = this.professionService.getProfessions();
  }


  getErrorMessage(controlName: string): string {

    const control = this.form.controls[controlName]

    if (control?.hasError('required')) {
      return FORM_ERROR_MESSAGE.REQUIRED;
    }
    return control?.invalid ? FORM_ERROR_MESSAGE.INVALID_FORM : '';
  }
}
