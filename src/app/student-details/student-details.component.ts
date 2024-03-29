import { Component, OnInit, ViewChild } from '@angular/core';
import {StudentService} from '../services/student.service';
import { Observable } from 'rxjs';
import {student} from '../student.model';
import {Router, ActivatedRoute} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule, MatTableDataSource, MatPaginator} from '@angular/material';

export interface student {
  firstName: String;
  lastName: String;
  Address: String;
  dateOfBirth: String;
}

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  
  students: any = [];
  displayedColumns: String[] = ['firstName', 'lastName', 'Address', 'dateOfBirth' /*,'Edit', 'Delete'*/];
  dataSource = new MatTableDataSource(this.students);
  applyFilter(filterValue:String){
    this.students.filter = filterValue.trim();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private Ss:StudentService){}

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
    this.Ss.getStudentsData().subscribe(data => {
        this.students = data;
    });
    
   }

   onRowClicked(row){
     console.log("Row clicked")
     //I wanted to send to edit route from here but couldn't find a solution
     
   }
   onDelete(id:String){
     console.log("Delete called "+ id);
     this.Ss.deleteStudent(id).subscribe(() =>
     {
        this.ngOnInit();
     })
   }
}
