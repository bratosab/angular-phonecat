import { Pipe, PipeTransform } from '@angular/core';
import { Phone } from '../models/phone.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Phone[], orderProp: string): any {
    if(!value && !Array.isArray(value)) {
      return;
    }

    value.sort((a, b) => {
      if(a[orderProp] < b[orderProp]) {
        return -1
      } else if(a[orderProp] > b[orderProp]) {
        return 1
      } else {
        return 0
      }
    })

    return value;
  }

}
