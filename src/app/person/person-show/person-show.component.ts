import { Component, OnInit } from '@angular/core';
import { AlertComponent } from 'src/app/shared/alert.component';

@Component({
  selector: 'app-person-show',
  templateUrl: './person-show.component.html',
  styleUrls: ['./person-show.component.css']
})
export class PersonShowComponent implements OnInit {

  constructor(private alertComponent: AlertComponent) { }

  ngOnInit(): void {
  }

  deletePerson() {
    this.alertComponent.confirmation();
  }

}
