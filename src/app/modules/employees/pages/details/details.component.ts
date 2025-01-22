import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, inject } from '@angular/core';
import { map, shareReplay, switchMap } from 'rxjs';

// Services
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true, // Mark as standalone
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  imports: [
    CommonModule, // Include CommonModule or other necessary modules
  ],
})
export class DetailsComponent {
  private employeesService = inject(EmployeeService);
  private route = inject(ActivatedRoute);

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
