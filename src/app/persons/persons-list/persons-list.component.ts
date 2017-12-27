import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {

  persons: Observable<Person[]>;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.reloadData();
  }

  deletePersons() {
    this.personService.deleteAll()
      .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log('ERROR: ' + error));
  }

   reloadData() {
    this.persons = this.personService.getPersonsList();
  }
}
