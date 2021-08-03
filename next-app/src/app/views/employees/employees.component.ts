import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}




/*      
import { Component, OnInit } from '@angular/core';
import { Employees } from './shared/employees.model';
import { EmployeesService } from './shared/employees.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employeesList: Employees[] = [];
  constructor(private employeesService: EmployeesService) { }
  ngOnInit(): void {
    this.getEmployeesList();
  }
  private getEmployeesList(): void {
    this.employeesService.getEmployees().subscribe(employeesList => {
      this.employeesList = employeesList;
      console.log(this.employeesList);
    });
  }
}



*/
