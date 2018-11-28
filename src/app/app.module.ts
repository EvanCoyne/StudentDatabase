import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import {StudentService} from './services/student.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatNativeDateModule, MatDatepicker, MatDatepickerModule} from '@angular/material';
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  } from '@angular/material';
import { MatIconModule } from '@angular/material/icon'; 
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: 'StudentList',
    component: StudentDetailsComponent
  },
  {
    path: 'CreateStudent',
    component: StudentCreateComponent
  },
  {
    path: 'EditStudent/:id',
    component: StudentEditComponent
  },
  {
    path: 'About',
    component: AboutComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentCreateComponent,
    StudentEditComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatNativeDateModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule,
  MatDatepickerModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
