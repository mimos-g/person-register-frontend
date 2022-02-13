import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profession } from '../model/profession';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  professionUrl: string = `${environment.mockServer}/professions`

  constructor(private http: HttpClient) { }

  getProfessions(): Observable<Profession[]> {
    return this.http.get<Profession[]>(this.professionUrl);
  }
}
