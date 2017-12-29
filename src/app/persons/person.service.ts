import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Person } from './person';

@Injectable()
export class PersonService {

  private baseUrl = 'http://localhost:8080/api/v1/persons';
  constructor(private http: HttpClient) { }

  getPerson(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/$id`);
  }

  createPerson(person: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, person);
  }

  updatePerson(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePerson(id: string): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getPersonsList(query = {}): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
