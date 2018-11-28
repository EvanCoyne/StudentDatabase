import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { StudentService } from '../services/student.service';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  panelOpenState = false;
  constructor(private service: StudentService) { }
dateOfBirth: Date
  onAddStudent(form: NgForm) {
    if (!form.valid)
      return;
      console.log(form.value.date);
      this.dateOfBirth = new Date(form.value.dateOfBirth);
      this.dateOfBirth.toDateString(); 
    this.service.addStudent(form.value.firstName, form.value.lastName, form.value.Address, form.value.dateOfBirth.toDateString()).subscribe();

    console.log(form.value);
    form.resetForm();
  }


  ngOnInit() {



  }

}
