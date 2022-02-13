import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/person';
import { PersonService } from '../service/person.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-person-index',
  templateUrl: './person-index.component.html',
  styleUrls: ['./person-index.component.css']
})
export class PersonIndexComponent implements OnInit {

  persons$!: Observable<Person[]>;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons() {
    this.persons$ = this.personService.getPersons();
  }

}
