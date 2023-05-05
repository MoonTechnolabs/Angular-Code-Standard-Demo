import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getBgcolorForGroupEntry',
})
export class GetBgcolorForGroupEntryPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
