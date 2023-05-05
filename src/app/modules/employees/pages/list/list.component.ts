import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(private employeesService: EmployeeService) {}

  // Get employee list by fake API
  getEmployeeList$ = this.employeesService.getEmployees();
}
