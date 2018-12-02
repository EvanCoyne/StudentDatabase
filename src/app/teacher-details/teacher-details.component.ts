import { Component, OnInit, ViewChild } from '@angular/core';
import {TeacherService} from '../services/teacher.service';
import { Observable } from 'rxjs';
import {teacher} from '../teacher.model';
import {Router, ActivatedRoute} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule, MatTableDataSource, MatPaginator} from '@angular/material';

export interface teacher {
  firstName: String;
  lastName: String;
  Address: String;
  dateOfBirth: String;
}

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {

  
  teachers: any = [];
  displayedColumns: String[] = ['firstName', 'lastName', 'Address', 'dateOfBirth' /*,'Edit', 'Delete'*/];
  dataSource = new MatTableDataSource(this.teachers);
  applyFilter(filterValue:String){
    this.teachers.filter = filterValue.trim();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private Ts:TeacherService){}

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
    
    this.Ts.getTeacherData().subscribe(data => {
        this.teachers = data;
    });
   }

   onRowClicked(row){
    console.log("Row clicked")
    //I wanted to send to edit route from here but couldn't find a solution
    
  }

   onDelete(id:String){
     console.log("Delete called "+ id);
     this.Ts.deleteTeacher(id).subscribe(() =>
     {
        this.ngOnInit();
     })
   }
}
