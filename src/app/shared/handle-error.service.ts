import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AlertComponent } from './alert.component';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor(private alertComponent: AlertComponent) { }

  handleError(error: HttpErrorResponse) {
    this.alertComponent.toast('top-end', 'error', 'something went wrong')
    return throwError(error)
  }
}
