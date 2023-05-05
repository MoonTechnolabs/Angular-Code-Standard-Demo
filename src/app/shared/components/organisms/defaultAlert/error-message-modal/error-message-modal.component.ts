import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IDefaultSimpleMessageOptions } from 'src/app/model/interfaces/employees.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-message-modal',
  templateUrl: './error-message-modal.component.html',
  styleUrls: ['./error-message-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageModalComponent implements OnInit {
  isError!: boolean;
  constructor(public modal: NgbActiveModal) {}

  /**
   * Source of IDefaultSimpleMessageOptions model
   */
  @Input() parent!: IDefaultSimpleMessageOptions;

  ngOnInit(): void {
    this.isError = this.parent.bodyText == 'Success' ? false : true;
  }
}
