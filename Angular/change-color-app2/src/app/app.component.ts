import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titleColor: string;
  contextInfo = [
    {
      title: 'T1 ib ij',
      content: 'contsths egoirgre itgiret4n aggg 44t qe qefths egoirgre itgiret4n aggg 44t qe qefths egoirgre itgiret4n aggg 4 4t qe qefieiq4tae  ng4grgbuat43u  e ent1',
      color: 'red',
    },
    {
      title: 'Ti  iuibiubu 2',
      content: 'contdra w e tefe e f nn i i ieww4 weefefefw efefwgwfwf nn i i ieww4 weefefefw efefwgwfwf nn i i ieww4    efw efefwgwfwent2',
      color: 'green',
    },
    {
      title: 'bu u ijT3',
      content: 'contsdvf  ewe w wer wef qeh gqer q34 hargaerghq gnqer gsh rwungerur q34 hargaerghq gnqer gsh r wungerur   34 hargaerghq   gsh rwungerur q34 hargaerghq gnqer gsh rwungerundent3',
      color: 'yellow',
    },
    {
      title: 'T i oi iuh 4',
      content: 'conti iu aief aaeiegae aog rg bsribufdbvr]garviadgaei rgair advadf giaeg aaeiegae aog rg bsribufdbvr]garviadgaei rgair advadf giaeg aaeiegae aog rg bsribufdbvr]garviadgaei rgair advadf giaeg aeriba aeent4',
      color: 'blue',
    }
  ];

  changeBorder(event) {
    console.log(event);
    this.titleColor = event;
  }
}
