import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count = 0;
  constructor() {}

  ngOnInit(): void {}

  addCount() {
    this.count = this.count + 1;
  }

  minCount() {
    this.count = this.count - 1;
  }
}
