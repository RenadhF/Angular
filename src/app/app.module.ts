import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeTableComponent } from './employee-details/employee-table/employee-table.component';
import { EmployeeEditComponent } from './employee-details/employee-edit/employee-edit.component';
import { EmployeeService } from './employee-details/employee-table/employee-table.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeTableComponent,
    EmployeeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
