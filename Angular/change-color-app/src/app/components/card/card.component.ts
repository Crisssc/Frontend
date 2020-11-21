import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Card } from '../../model/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  card: Card;

  @Input()
  selected: boolean;

  @Input()
  color: string;

  @Output()
  cardOnClick: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  paragraphOnClick(id) {
    this.cardOnClick.emit(id);
  }
}
