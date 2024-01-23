import { Component, Inject, OnInit } from '@angular/core';
import { PhoneDetail } from '../models/phone-detail.model';
import { PhoneService } from '../core/phone/phone.service';
import * as angular from 'angular'
import { RouteParams } from '../ajs-upgraded-providers';

@Component({
  selector: 'phone-detail',
  templateUrl: 'phone-detail.component.html',
})
export class PhoneDetailComponent implements OnInit {
  mainImageUrl!: string;
  phone!: PhoneDetail;

  constructor(private phoneService: PhoneService, 
    private $routeParams: RouteParams) {}

  ngOnInit(): void {
    this.phoneService.get(this.$routeParams['phoneId']).subscribe(data => {
        this.phone = data
        this.setImage(data.images[0])
    });
  }

  setImage(url: string) {
    this.mainImageUrl = url
  }
}
