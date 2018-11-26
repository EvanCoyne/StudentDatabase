import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  constructor(private service: StudentService) { }
dateOfBirth: Date
  onAddPost(form: NgForm) {
    if (!form.valid)
      return;
      console.log(form.value.date);
      this.dateOfBirth = new Date(form.value.dateOfBirth);
      this.dateOfBirth.toDateString(); 
    this.service.addPost(form.value.firstName, form.value.lastName, form.value.Address, form.value.dateOfBirth.toDateString()).subscribe();

    console.log(form.value);
    form.resetForm();
  }


  ngOnInit() {



  }

}
