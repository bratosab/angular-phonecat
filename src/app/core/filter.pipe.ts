import { Pipe, PipeTransform } from '@angular/core';
import { Phone } from '../models/phone.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Phone[], query: string): any {
    if (value && query) {
      return value.filter((phone) => {
        return JSON.stringify(phone)
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase());
      });
    }
    return value;
  }
}
