import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../model/person';
import { catchError, first, map } from 'rxjs/operators'
import { HandleErrorService } from 'src/app/shared/handle-error.service';
import { ProfessionService } from './profession.service';
import { Profession } from '../model/profession';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personUrl: string = `${environment.mockServer}/persons`

  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService,
    private professionSerice: ProfessionService
  ) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personUrl).pipe(
      map((persons: Person[]) => {
        persons.map((person: Person) => {
          this.professionSerice.getProfession(person.profession_id).subscribe(profession => {
            person.profession = profession
          })
        })
        return persons;
      }),
    );
  }

  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.personUrl}/${id}`)
      .pipe(
        map(person => {
          this.professionSerice.getProfession(person.profession_id).subscribe(profession => {
            person.profession = profession;
          })
          return person
        }),
        catchError(error => this.handleError.handleError(error))
      );
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.personUrl, person).pipe(
      catchError(error => this.handleError.handleError(error))
    );;
  }

  updatePerson(person: Person): Observable<Person> {
    return this.http.patch<Person>(`${this.personUrl}/${person.id}`, person).pipe(
      catchError(error => this.handleError.handleError(error))
    );;
  }

  deletePerson(id: number): Observable<Person> {
    return this.http.delete<Person>(`${this.personUrl}/${id}`).pipe(
      catchError(error => this.handleError.handleError(error))
    );;
  }
}
