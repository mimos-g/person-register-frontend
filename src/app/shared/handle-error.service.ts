import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor() { }

  handleError(error: HttpErrorResponse) {
    console.log('something went wrong: ', error);
    return throwError(error)
  }
}
