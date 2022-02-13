import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertComponent } from 'src/app/shared/alert.component';
import { Person } from '../model/person';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person-show',
  templateUrl: './person-show.component.html',
  styleUrls: ['./person-show.component.css']
})
export class PersonShowComponent implements OnInit {

  person!: Person;

  constructor(
    private alertComponent: AlertComponent,
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getPerson(id);
  }

  deletePerson() {
    this.alertComponent.confirmation(`Delete ${this.person.name}`)
      .then(result => {
        if (result.isConfirmed) {
          this.personService.deletePerson(this.person.id!).subscribe(data => {
            this.router.navigate([''])
          });
        }
      })
  }

  async getPerson(id: number) {
    this.person = await this.personService.getPerson(id).toPromise();
  }

}
