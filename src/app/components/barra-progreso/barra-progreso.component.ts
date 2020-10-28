import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barra-progreso',
  templateUrl: './barra-progreso.component.html',
  styles: [
  ]
})
export class BarraProgresoComponent implements OnInit {
  
  @Input() progreso: number = 0;
  @Input() bgClass: string = 'bg-primary';
  constructor() { }

  ngOnInit(): void {
  }

  get getProgreso(){
    return `${this.progreso}%`;
  }

}
