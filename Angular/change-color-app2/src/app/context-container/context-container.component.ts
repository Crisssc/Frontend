import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-context-container',
  templateUrl: './context-container.component.html',
  styleUrls: ['./context-container.component.scss']
})
export class ContextContainerComponent implements OnInit {
  @Input() context: any;
  @Output() changeBorder = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickBtn() {
    this.changeBorder.emit(this.context.color);
  }

}
