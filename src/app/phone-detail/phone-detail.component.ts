import { Component,  OnInit } from '@angular/core';
import { PhoneDetail } from '../models/phone-detail.model';
import { PhoneService } from '../core/phone/phone.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'phone-detail',
  templateUrl: 'phone-detail.component.html',
})
export class PhoneDetailComponent implements OnInit {
  mainImageUrl!: string;
  phone!: PhoneDetail;

  constructor(
    private phoneService: PhoneService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const phoneId = this.activatedRoute.snapshot.paramMap.get('phoneId');

    if (phoneId) {
      this.phoneService.get(phoneId).subscribe((data) => {
        this.phone = data;
        this.setImage(data.images[0]);
      });
    }
  }

  setImage(url: string) {
    this.mainImageUrl = url;
  }
}
