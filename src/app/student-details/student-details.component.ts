import { Component, OnInit } from '@angular/core';
import {StudentService} from '../services/student.service';
import { Observable } from 'rxjs';
import {student} from '../student.model';
import {Router, ActivatedRoute} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  
  students: any = [];

  constructor(private Ss:StudentService){}

  ngOnInit(){
   
    this.Ss.getStudentsData().subscribe(data => {
        this.students = data;
    });
   }

   onDelete(id:String){
     console.log("Delete called "+ id);
     this.Ss.deleteStudent(id).subscribe(() =>
     {
        this.ngOnInit();
     })
   }
}
