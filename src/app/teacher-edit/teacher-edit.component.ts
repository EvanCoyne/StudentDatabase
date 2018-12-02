import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import { TeacherService } from '../services/teacher.service';
import { NgForm } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';



@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {
  panelOpenState = false;
  teacher: any = [];
  tfirstName: String;
  tlastName: String;
  tAddress: String;
  tdateOfBirth: Date;
  constructor(private router: Router, private route: ActivatedRoute, private service: TeacherService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getTeacher(this.route.snapshot.params['id']).subscribe(data => {
      this.teacher = data;
      console.log(this.teacher);
      this.tfirstName = this.teacher.firstName;
      console.log("message" + this.tfirstName);
      this.tlastName = this.teacher.lastName;
      console.log("message" + this.tlastName);
      this.tAddress = this.teacher.Address;
      console.log("message" + this.tAddress);
      this.tdateOfBirth = this.teacher.dateOfBirth.toDateString();
      console.log("message" + this.tdateOfBirth.toDateString());
    });
  }
  onEditTeacher(form: NgForm) {
    if (!form.valid)
      return;
    console.log(form.value.date);
    this.tdateOfBirth = new Date(form.value.date);
    this.tdateOfBirth;
    this.service.updateTeacher(this.teacher._id, form.value.firstName, form.value.lastName, form.value.Address, form.value.dateOfBirth.toDateString()).subscribe(() => {
      this.router.navigate(['/TeacherList']);
    });
  }

}
