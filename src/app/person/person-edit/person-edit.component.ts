import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../model/person';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  person!: Person

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService
  ) { }

  ngOnInit(): void {
    const personId = Number(this.route.snapshot.paramMap.get('id'));
    this.getPerson(personId);

  }

  async getPerson(id: number) {
    this.person = await this.personService.getPerson(id).toPromise();
  }
}
