import { LocalStorageService } from 'src/app/shared/services/localStorage/local-storage.service';
import { TestBed } from '@angular/core/testing';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
