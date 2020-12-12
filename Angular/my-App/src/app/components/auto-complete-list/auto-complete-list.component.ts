import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-complete-list',
  templateUrl: './auto-complete-list.component.html',
  styleUrls: ['./auto-complete-list.component.scss']
})
export class AutoCompleteListComponent implements OnInit {
  selected: string;
  countryList: any[];

  constructor() { }

  ngOnInit(): void {
    this.selected = '';
    this.countryList = [
      { "name": "Aistan", "code": "AF" },
      { "name": "Bslands", "code": "AX" },
      { "name": "Ca", "code": "AL" },
      { "name": "Da", "code": "DZ" },
      { "name": "Ean Samoa", "code": "AS" },
      { "name": "Fry", "code": "AD" },
      { "name": "Ghu", "code": "AO" }
  ]
  }

}
