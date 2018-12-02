import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { TeacherService } from '../services/teacher.service';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.css']
})
export class TeacherCreateComponent implements OnInit {
  panelOpenState = false;
  constructor(private service: TeacherService) { }
  dateOfBirth: Date
  onAddTeacher(form: NgForm) {
    if (!form.valid)
      return;
    console.log(form.value.date);
    this.dateOfBirth = new Date(form.value.dateOfBirth);
    this.dateOfBirth.toDateString();
    this.service.addTeacher(form.value.firstName, form.value.lastName, form.value.Address, form.value.dateOfBirth.toDateString()).subscribe();

    console.log(form.value);
    form.resetForm();
  }


  ngOnInit() {



  }

}
