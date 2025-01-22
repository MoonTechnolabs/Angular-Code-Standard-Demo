import { ErrorMessageModalComponent } from 'src/app/shared/components/organisms/defaultAlert/error-message-modal/error-message-modal.component';
import { inject, Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private modalService = inject(NgbModal);

  /**
   * Opens a default error message modal.
   * @param text - if needed translate `text` before hand
   * @param headline - headline of modal
   * @defaultValue `translateService.instant('thatDidNowWork') as string`
   * @returns Promise from `defaultSimpleMessage` modal
   */
  defaultErrorMessage<T>(text: string, headline?: string): Observable<T> {
    const options = {
      bodyText: text,
      // titleText: headline ? headline : 'A problem occurred ...',
      titleText: headline ? headline : 'Logged in',
      // titleText: headline ? 'A problem occurred...' : 'Logged in',
    };

    const modalRef = this.modalService.open(ErrorMessageModalComponent, {
      backdrop: 'static',
      backdropClass: 'mt_modal_default_backdrop',
      windowClass: 'mt_modal',
    });

    modalRef.componentInstance.parent = options;

    return from(modalRef.result as Promise<T>).pipe(take(1));
  }
}
