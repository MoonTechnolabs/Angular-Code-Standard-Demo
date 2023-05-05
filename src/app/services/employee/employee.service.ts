import { EmployeeDetails } from 'src/app/model/interfaces/employees.interface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { userList } from 'src/app/model/const/api';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  users = userList;

  /**
   * Get list of users
   * @returns Observable with list of employees
   */
  getEmployees(): Observable<EmployeeDetails[]> {
    return of(userList);
  }

  /**
   * Get list of users from fake API
   * @param employeeId - The employee id
   * @returns Observable with details of employee
   */
  getEmployeeDetails(employeeId: number): Observable<EmployeeDetails> {
    const details =
      this.users.find((data) => data.id === employeeId) ||
      ({} as EmployeeDetails);
    return of(details);
  }
}
