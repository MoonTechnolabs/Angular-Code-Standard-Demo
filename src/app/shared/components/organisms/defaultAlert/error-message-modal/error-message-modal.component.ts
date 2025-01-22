import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { IDefaultSimpleMessageOptions } from 'src/app/model/interfaces/employees.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomButtonComponent } from 'src/app/shared/components/atoms/buttons/custom-button/custom-button.component';
import { NgClass } from '@angular/common';
import { SvgComponent } from 'src/app/shared/components/atoms/svgs/svg/svg.component';

@Component({
  selector: 'app-error-message-modal',
  templateUrl: './error-message-modal.component.html',
  styleUrls: ['./error-message-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CustomButtonComponent, NgClass, SvgComponent],
})
export class ErrorMessageModalComponent implements OnInit {
  public modal = inject(NgbActiveModal);

  isError!: boolean;

  /**
   * Source of IDefaultSimpleMessageOptions model
   */
  @Input() parent!: IDefaultSimpleMessageOptions;

  ngOnInit(): void {
    this.isError = this.parent.bodyText == 'Success' ? false : true;
  }
}
