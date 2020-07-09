
import { Subject } from "rxjs";
import { Employee } from '../shared/employees.model';
import { EmployeeEditService } from '../employee-edit/employee-edit.service';
import { Injectable } from '@angular/core';


@Injectable()
export class EmployeeService{
    tableUpdate = new Subject<Employee[]>();
    private employeesDetails: Employee[] = [
        new Employee('abc', 32, 50000),
        new Employee('lmn', 23, 15000),
        new Employee('kgf', 23, 15000),
        new Employee('abc1', 32, 50000),
        new Employee('qwerty', 33, 10000),
        new Employee('xyz', 23, 15000),
        new Employee('asdff', 32, 50000),
        new Employee('jkl', 44, 35000),
        new Employee('pqr', 21, 15000),
        
      ];

      //constructor(private employeeEditService: EmployeeEditService){}

      getEmployee(){
          return this.employeesDetails.slice();    
      }

      deleteEmp(emp: Employee)
      {
        const index = this.employeesDetails.findIndex(function(ele,arr){
          if(ele.name>emp.name)
          return true;
        });
        this.employeesDetails.splice(index-1, 1);
        this.tableUpdate.next(this.employeesDetails.slice());
      }
      updateEmployeeTable(employeedata: Employee, editMode: boolean){
        if (editMode) {
            const index = this.employeesDetails.findIndex(function(ele,arr){
                if(ele.name>employeedata.name)
                return true;
            });
            this.employeesDetails.splice(index, 1, employeedata);
          } else {
            this.employeesDetails.push(employeedata);
            }
            this.tableUpdate.next(this.employeesDetails.slice());
          
            
      }
}