import { HomeDataService } from 'src/app/modules/dashboard/services/home-data.service';
import { TestBed } from '@angular/core/testing';

describe('HomeDataService', () => {
  let service: HomeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
