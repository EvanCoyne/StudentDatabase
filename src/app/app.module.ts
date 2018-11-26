import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import {StudentService} from './services/student.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatNativeDateModule, MatDatepicker, MatDatepickerModule} from '@angular/material';
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule
  } from '@angular/material';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: StudentDetailsComponent
  },
  {
    path: 'create',
    component: StudentCreateComponent
  },
  {
    path: 'edit/:id',
    component: StudentEditComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentCreateComponent,
    StudentEditComponent
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
