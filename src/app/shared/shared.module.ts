import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from 'src/app/shared/components/atoms/buttons/custom-button/custom-button.component';
import { ErrorMessageModalComponent } from 'src/app/shared/components/organisms/defaultAlert/error-message-modal/error-message-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { SvgComponent } from 'src/app/shared/components/atoms/svgs/svg/svg.component';

@NgModule({
  declarations: [
    CustomButtonComponent,
    ErrorMessageModalComponent,
    SvgComponent,
  ],
  imports: [CommonModule, NgbModule],
  exports: [CustomButtonComponent, SvgComponent],
})
export class SharedModule {}
