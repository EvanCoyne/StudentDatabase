import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import {StudentService} from '../services/student.service';
import { NgForm } from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';



@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  panelOpenState = false;
  student : any = [];
  sfirstName : String; 
  slastName : String;
  sAddress: String;
  sdateOfBirth: Date; 
  constructor(private router:Router, private route: ActivatedRoute, private service:StudentService) { }
 
  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getStudent(this.route.snapshot.params['id']).subscribe(data =>
    {
      this.student = data;
      console.log(this.student);
      this.sfirstName = this.student.firstName;
      console.log("message" +this.sfirstName);
      this.slastName = this.student.lastName;
      console.log("message" +this.slastName);
      this.sAddress = this.student.Address;
      console.log("message" +this.sAddress);
      this.sdateOfBirth = this.student.dateOfBirth.toDateString();
      console.log("message" +this.sdateOfBirth.toDateString());    
    });
  }
  onEditPost(form: NgForm) {
    if (!form.valid)
      return;
      console.log(form.value.date);
      this.sdateOfBirth = new Date(form.value.date);
      this.sdateOfBirth;
    this.service.updateStudent(this.student._id, form.value.firstName, form.value.lastName, form.value.Address, form.value.dateOfBirth.toDateString()).subscribe(() =>
    {
      this.router.navigate(['/StudentList']);
    });
  }

}
