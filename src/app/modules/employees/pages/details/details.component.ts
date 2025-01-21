import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';
import { map, shareReplay, switchMap } from 'rxjs';

// Services
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  standalone: true, // Mark as standalone
  imports: [
    CommonModule, // Include CommonModule or other necessary modules
  ],
})
export class DetailsComponent {
  constructor(
    private employeesService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  // Save the employee id from the router param
  // and cache it via shareReplay
  getEmployeeId$ = this.route.paramMap.pipe(
    map((param: ParamMap) => String(param.get('id'))),
    shareReplay(1)
  );

  // Get the employee details
  getEmployeeDetails$ = this.getEmployeeId$.pipe(
    switchMap((empId) =>
      this.employeesService.getEmployeeDetails(Number(empId))
    )
  );
}
