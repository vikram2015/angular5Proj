import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  template:`
<h3>This is Student Data</h3>
{{studentwaData}}
{{student}}
<input type="text" [(ngModel)]="name"/>
{{name}}
<button type="submit" value="Enter" ngClick="getStudents()" >Enter</button>
{{student}}
  <ul>
  <li *ngFor="let studentwa of student">{{studentwa}}</li>
  </ul>
  `
})
export class StudentComponent implements OnInit {

  constructor(private _dataService: DataService) { }
  // DataService.getStudent(){

// }

  public student;
  public studentData = [];



  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    var studentwaData;
    // var studentData;
    this._dataService.getStudent().subscribe(function (data) {
      console.log("data")
      console.log(data)
        studentwaData = data

      // this.studentData.push(data[0]);
      this.student = data;

      // this._dataService.changeGoal(this.studentData);
      console.log(this.studentData)
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
    );
       console.log(data)*/
  }

}
