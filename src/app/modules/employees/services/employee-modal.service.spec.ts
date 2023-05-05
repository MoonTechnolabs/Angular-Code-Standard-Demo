import { EmployeeModalService } from 'src/app/modules/employees/services/employee-modal.service';
import { TestBed } from '@angular/core/testing';

describe('EmployeeModalService', () => {
  let service: EmployeeModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
