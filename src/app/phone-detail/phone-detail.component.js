'use strict';

import { downgradeComponent } from "@angular/upgrade/static";
import { PhoneDetailComponent } from "./phone-detail.component";

// Register `phoneDetail` component, along with its associated controller and template
// angular.
//   module('phoneDetail').
//   component('phoneDetail', {
//     templateUrl: './templates/phone-detail.template.html',
//     controller: ['$routeParams', 'Phone',
//       function PhoneDetailController($routeParams, Phone) {
//         var self = this;

//         Phone.get($routeParams.phoneId).subscribe(data => {
//           self.phone = data
//           self.setImage(data.images[0]);
//         })

//         self.setImage = function setImage(imageUrl) {
//           self.mainImageUrl = imageUrl;
//         };
//       }
//     ]
//   });

angular.
  module('phoneDetail').
  directive(
    'phoneDetail',
    downgradeComponent({ component: PhoneDetailComponent })
  )