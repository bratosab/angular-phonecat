import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkmark'
})
export class CheckmarkPipe implements PipeTransform {

  transform(value: boolean): any {
    return value ? '\u2713' : '\u2718';
  }

}
