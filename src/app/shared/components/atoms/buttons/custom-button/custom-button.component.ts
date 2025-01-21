import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomButtonComponent {
  _color = 'mt-button-default';
  _disabled = false;
  _icon!: string;
  _loading = false;
  _loadingText = 'loading_btn';
  _outline = false;
  _outlineColor = 'var(--default-outline-color)';

  /**
   * Background color of the button.
   * @remarks when using kebab-case, the first value is the color the rest are the properties
   * @example 'white-outline': creates a white button with an outline
   * @defaultValue 'mt-button-default'
   */
  @Input()
  set color(color: string) {
    console.log(color);
    // const style = ButtonService.createStyleFromColor(color);
    // this._color = style.color;
    // this._outline = style.outline;
    // this._outlineColor = style.outlineColor;
  }
  get color(): string {
    return this._color;
  }

  /**
   * Disables the button.
   * @defaultValue false
   */
  @HostBinding('class.disabled-click-event')
  @Input()
  set disabled(value: unknown) {
    this._disabled = Boolean(value);
  }
  get disabled(): unknown {
    return this._disabled;
  }

  /**
   * Sets a dropdown caret symbol.
   * @defaultValue false
   */
  @Input() dropdown = false;

  /**
   * Glyphicon name.
   * Available icons {@link https://www.w3schools.com/bootstrap/bootstrap_ref_comp_glyphs.asp}
   */
  @Input()
  set icon(iconName: string) {
    if (!iconName) {
      return;
    }
    if (!iconName.includes('glyphicon')) {
      this._icon = `glyphicon glyphicon-${iconName}`;
    } else {
      this._icon = `glyphicon ${iconName}`;
    }

    // adds class name `cog-icon`
    if (iconName === 'cog' && !this.text) {
      this.element.className += ' cog-icon';
    }
  }
  get icon(): string {
    return this._icon;
  }

  /**
   * Sets loading status
   * @remarks Disabled is also set
   */
  @Input() set loading(loading: boolean) {
    this._disabled = loading;
    this._loading = loading;
  }

  /**
   * Sets loading text
   */
  @Input() set loadingText(loadingText: string) {
    this._loadingText = loadingText;
  }

  /**
   * The class applied directly onto the button.
   */
  @Input() klass!: string;

  /**
   * Sets a border/outline around the button
   * @defaultValue false
   */
  @Input()
  set outline(value: boolean) {
    this._outline = value;
  }
  get outline(): boolean {
    return this._outline;
  }

  /**
   * Sets the outline color of the button
   * @defaultValue 'var(--default-outline-color)'
   */
  @Input()
  set outlineColor(value: string) {
    this._outlineColor = value;
  }
  get outlineColor(): string {
    return this._outlineColor;
  }

  /**
   * Button text.
   * @remarks as translateTag
   */
  @Input() text!: string;

  /**
   * Type of the button.
   * @defaultValue 'button'
   */
  @Input() type = 'button';

  constructor(private host: ElementRef) {}

  get element(): HTMLElement {
    return this.host.nativeElement as HTMLElement;
  }
}
