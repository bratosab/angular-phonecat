import { Component, OnInit } from "@angular/core";
import { PhoneService } from "../core/phone/phone.service";
import { Phone } from "../models/phone.model";

@Component({
    selector: 'phone-list',
    templateUrl: './phone-list.component.html'
})
export class PhoneListComponent implements OnInit {
    phones!: Phone[];
    orderProp: string = 'age'
    query!: string;

    constructor(private phoneService: PhoneService){}

    ngOnInit(): void {
        this.phoneService.query().subscribe(data => {
            this.phones = data
        });
    }
}