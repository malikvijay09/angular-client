import { Component, OnInit, Input } from '@angular/core';

import {PersonService } from '../person.service';
import { Person } from '../person';

import { PersonsListComponent } from '../persons-list/persons-list.component';
@Component({
  selector: 'person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  @Input() person: Person;
  constructor(private personService: PersonService, private listComponent: PersonsListComponent) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.personService.updatePerson(this.person.id,
    { firstName: this.person.firstName, lastName: this.person.lastName,
      age: this.person.age, active: this.person.active})
    .subscribe(
    data => {
      console.log(data);
      this.person = data as Person;
    },
    error => console.log(error));
  }

  deletePerson() {
    this.personService.deletePerson(this.person.id)
    .subscribe(
    data => {
      console.log(data);
      this.listComponent.reloadData();
    },
    error => console.log(error));
  }

}
