import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-list',
  standalone: true, // Mark as standalone
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  imports: [
    RouterModule,
    CommonModule, // Include CommonModule or other necessary modules
  ],
})
export class ListComponent {
  private employeesService = inject(EmployeeService);

  // Get employee list by fake API
  getEmployeeList$ = this.employeesService.getEmployees();
}
