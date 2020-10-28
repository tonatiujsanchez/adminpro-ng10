import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent   {

  colorTema1: string = 'primary';
  colorTema2: string = 'info';
  colorTema3: string = 'success';
  
  progreso1:number = 15;
  progreso2:number = 65;
  progreso3:number = 40;

}
