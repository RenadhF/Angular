import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../shared/employees.model';
import {EmployeeService} from './employee-table.service';
import { Subject, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  private subscription: Subscription;
  employees: Employee[] ;
  constructor(private employeeService: EmployeeService,
              private router: Router,
              private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.employees= this.employeeService.getEmployee();
    this.subscription = this.employeeService.tableUpdate.subscribe(
      (employees: Employee[]) =>{
              this.employees = employees;
      }
      
    );
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }


  editEmpData(emp : Employee)
  {
    this.router.navigate(['/employee', {'name': emp.name, 'age': emp.age, 'salary': emp.salary}]);
  }
  deleteEmp(emp : Employee)
  {
    this.employeeService.deleteEmp(emp);
  }
  
  onNewEmp() {
    this.router.navigate(['/employee/new']);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.subscription.unsubscribe();
  }

}
