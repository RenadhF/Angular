import { EmployeeService } from './../employee-table/employee-table.service';
import { Employee } from './../shared/employees.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class EmployeeEditService {
    empDataEdit = new Subject<Employee>();
    constructor(private employeeService: EmployeeService){}

    updateEmployeeTableToEmployeeService(employeedata: Employee, editMode: boolean){
        this.employeeService.updateEmployeeTable(employeedata,editMode);
    }

}
