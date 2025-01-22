import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Input,
} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-svg',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgComponent {
  private host = inject(ElementRef);

  /**
   * CSS Class
   */
  @Input() class!: string;

  /**
   * CSS text
   */
  @Input() set cssText(c: string | undefined) {
    // eslint-disable-next-line
    this.element.style.cssText += ` ${c}`;
  }

  /**
   * Filter variable
   */
  @Input() set filter(f: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    this.element.style.cssText += ` filter: var(${f})`;
  }

  /**
   * Size of SVG in pixels.
   */
  @Input() set size(n: number | string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    this.element.style.height = `${n}px`;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    this.element.style.width = `${n}px`;
  }

  /**
   * Source of SVG file.
   */
  @Input() src!: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get element(): any {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.host.nativeElement;
  }
}
