import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  template:`
<div class="container">
<h3>This is Student Data</h3>
  <ul>
  <li *ngFor="let students of student">{{students}}</li>
  </ul>
  </div>
  `
})
export class StudentComponent implements OnInit {
  student = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this._dataService.getStudent().subscribe(function (data) {
      console.log("data")
      console.log(data)
      this.student = data;
      console.log(this.student)
    })
    // console.log(response)

    /*var data=this._dataService.getStudent().subscribe(
      // the first argument is a function which runs on success
      data => { this.student = data},

      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );*/
  }

}
