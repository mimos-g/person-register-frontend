import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleErrorService } from 'src/app/shared/handle-error.service';
import { environment } from 'src/environments/environment';
import { Profession } from '../model/profession';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  professionUrl: string = `${environment.api}/professions`

  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService
  ) { }

  getProfessions(): Observable<Profession[]> {
    return this.http.get<Profession[]>(this.professionUrl).pipe(
      catchError(error => this.handleError.handleError(error))
    );
  }

  getProfession(id: number): Observable<Profession> {
    return this.http.get<Profession>(`${this.professionUrl}/${id}`).pipe(
      catchError(error => this.handleError.handleError(error))
    );
  }
}
