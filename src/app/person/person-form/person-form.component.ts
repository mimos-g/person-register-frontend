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
import { Router } from '@angular/router';

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
    private alertComponent: AlertComponent,
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.person.currentValue) {
      this.setFormValue(changes.person.currentValue);
    }
  }

  ngOnInit(): void {
    this.getProfessions();
  }

  formSubmited() {
    if (this.form.valid) {

      const _person = { id: this.person?.id, ...this.form.value }

      const $savePeson: Observable<Person> = this.person
        ? this.personService.updatePerson(_person)
        : this.personService.addPerson(this.form.value);

      $savePeson.subscribe(createdPerson => {
        this.alertComponent.toast('top-end', 'success', 'successfully saved');
        if (!this.person) {
          document.getElementById('resetBtn')?.click()
        } else {
          this.router.navigate(['/person/show', this.person.id])
        }
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

  setFormValue(person: Person) {
    this.form.setValue({
      name: person.name,
      phone: person.phone,
      email: person.email,
      profession_id: person.profession_id,
    })
  }
}
