import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [
  ]
})
export class GraficaDonaComponent {
    
    @Input() public title: string = "Sin título"
    
    @Input('labels')  public doughnutChartLabels: Label[]  = ['Label 1', 'Label 2', 'Label 3'];
    @Input('valores') public doughnutChartData: MultiDataSet = [
                               [100, 100, 100]
                             ];

    @Input('colores') public colors: Color[] =  [
                               { backgroundColor: [ '#e8e8e8', '#bbbfca', '#495464' ] }
                             ];

}
