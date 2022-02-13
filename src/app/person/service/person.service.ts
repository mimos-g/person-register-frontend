import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personUrl: string = `${environment.mockServer}/persons`

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personUrl);
  }

  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.personUrl}/${id}`);
  }

  addPerson(person: Person): Observable<Person> {
    console.log('add person');
    return this.http.post<Person>(this.personUrl, person);
  }

  updatePerson(person: Person): Observable<Person> {
    console.log('update person');
    return this.http.patch<Person>(this.personUrl, person);
  }

  deletePerson(id: number): Observable<Person> {
    return this.http.delete<Person>(`${this.personUrl}/${id}`);
  }
}
