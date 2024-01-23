import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhoneDetail } from '../../models/phone-detail.model';
import { Phone } from '../../models/phone.model';

@Injectable()
export class PhoneService {
  constructor(private http: HttpClient) {}

  get(phoneId: string) {
    return this.http.get<PhoneDetail>(`assets/phones/${phoneId}.json`);
  }

  query() {
    return this.http.get<Phone[]>(`assets/phones/phones.json`);
  }
}
