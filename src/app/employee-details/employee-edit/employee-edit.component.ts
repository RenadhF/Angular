import { EmployeeEditService } from './employee-edit.service';
import { Employee } from './../shared/employees.model';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
  providers: [EmployeeEditService]
})
export class EmployeeEditComponent implements OnInit {
  //@ViewChild('f') empForm : NgForm;
  //private subscription: Subscription;
  Ename: string;
  age : number;
  salary : number;
  editMode = false;
  empForm: FormGroup;

  constructor(private employeeEditService : EmployeeEditService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.Ename = params['name'];
          this.age = +params['age'];
          this.salary = +params['salary'];
          this.editMode = params['name'] != null;
          this.initForm();
        }
      );
  }


  onAdd(){
    
      const value = this.empForm.value;
      const newEmp = new Employee(value.name, value.age, value.salary );
      this.employeeEditService.updateEmployeeTableToEmployeeService(newEmp,this.editMode);
      this.router.navigate(['/employee-details']);
    }
    


  private initForm() {


    this.empForm = new FormGroup({
      'name': new FormControl(this.Ename, Validators.required),
      'age': new FormControl(this.age, Validators.required),
      'salary': new FormControl(this.salary, Validators.required)
    });
  }

  









  
}
