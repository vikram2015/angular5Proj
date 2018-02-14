import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { Http } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import {Http, HTTP_PROVIDERS} from '@angular/http';
// import 'rxjs/add/operator/map'
import { map } from 'rxjs/operators/map';
import {Observable} from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()

export class DataService {

  result;

  private  goals = new BehaviorSubject<any>(['The initial goal','Another silly life goal']);
  goal = this.goals.asObservable();

  constructor(private http:HttpClient) {

  }

  getStudent() {
    console.log("hi hello");
     return this.http.get('api/students')
    /*return this._http.get('/students').map(function (result) {
      this.result = result.json().data;
    })*/

    // console.log("hi hello");
    // return this.http.get('/students');
    /*return this._http.get('/students')
      .pipe(

      );*/
  }

  changeGoal(goal){
    this.goals.next(goal);
  }
}
