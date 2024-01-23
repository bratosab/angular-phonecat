import { downgradeComponent } from '@angular/upgrade/static'
import { PhoneListComponent } from './phone-list.component'

// Register `phoneList` component, along with its associated controller and template
// angular.
//   module('phoneList').
//   component('phoneList', {
//     templateUrl: './templates/phone-list.template.html',
//     controller: ['Phone',
//       function PhoneListController(Phone) {
//          Phone.query().subscribe(data => {
//           this.phones = data
//         });
//         this.orderProp = 'age';
//       }
//     ]
//   });

angular.
  module('phoneList').
  directive(
    'phoneList',
    downgradeComponent({ component: PhoneListComponent })
  )