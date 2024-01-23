
import * as angular from 'angular'
import { downgradeInjectable } from '@angular/upgrade/static';
import { PhoneService } from './phone.service';

angular.module('core.phone').factory('Phone', downgradeInjectable(PhoneService))
