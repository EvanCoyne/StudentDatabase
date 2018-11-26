import { Component, OnInit } from '@angular/core';
import {StudentService} from '../services/student.service';
import { Observable } from 'rxjs';
import {student} from '../student.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  
  students: any = [];

  constructor(private Ss:StudentService){}

  ngOnInit(){
   
    this.Ss.getPostsData().subscribe(data => {
        this.students = data;
    });
   }

   onDelete(id:String){
     console.log("Delete called "+ id);
     this.Ss.deletePost(id).subscribe(() =>
     {
        this.ngOnInit();
     })
   }
}
