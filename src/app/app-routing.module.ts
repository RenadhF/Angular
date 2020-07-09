import { EmployeeEditComponent } from './employee-details/employee-edit/employee-edit.component';
import { EmployeeTableComponent } from './employee-details/employee-table/employee-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/employee-details', pathMatch: 'full' },
    { path: 'employee-details', component: EmployeeTableComponent},
    { path: 'employee', component: EmployeeEditComponent,children :[
      { path: 'new', component: EmployeeEditComponent },
      { path: ':name/:age/:salary/edit', component: EmployeeEditComponent }
    ]}
    
      
    
    
  ];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
export class AppRoutingModule{

}