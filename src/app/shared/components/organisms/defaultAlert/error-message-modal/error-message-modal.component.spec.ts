import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorMessageModalComponent } from 'src/app/shared/components/organisms/defaultAlert/error-message-modal/error-message-modal.component';

describe('ErrorMessageModalComponent', () => {
  let component: ErrorMessageModalComponent;
  let fixture: ComponentFixture<ErrorMessageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorMessageModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
