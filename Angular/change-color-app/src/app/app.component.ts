import { Card } from './model/Card';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  list: any;
  selected: string;
  constructor() {
    this.list = [
      {
        index: 0,
        color: 'red',
        card: new Card(
          0,
          'Title1',
          'Of on affixed civilly moments promise explain fertile in. Assurance advantage belonging happiness departure so of. Now improving and one sincerity intention allowance commanded not. Oh an am frankness be necessary earnestly advantage estimable extensive.'
        ),
        selected: false,
      },
      {
        index: 1,
        color: 'yellow',
        card: new Card(
          1,
          'Title2',
          'Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated. '
        ),
        selected: false,
      },
      {
        index: 2,
        color: 'blue',
        card: new Card(
          2,
          'Title3',
          'Say anxious carried compact conduct sex general nay certain. Mrs for recommend exquisite household eagerness preserved now. My improved honoured he am ecstatic quitting greatest formerly'
        ),
        selected: false,
      },
    ];
    this.selected = '';
  }

  cardOnClick(id): void {
    console.log(id, 'from app.component');
    this.list.forEach((e) => {
      if (e.index === id) {
        e.selected = true;
        this.selected = e.color;
      } else {
        e.selected = false;
      }
    });
  }
}
