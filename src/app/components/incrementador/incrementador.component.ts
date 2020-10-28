import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent   {
  
  @Input() progreso: number = 18;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorEmitido: EventEmitter<number> = new EventEmitter();


  constructor() { }

  cambiarValor( valor: number ){
    this.progreso = this.progreso + valor;

    if( this.progreso >= 100 && valor >= 0 ){
      this.valorEmitido.emit( 100 );
      return this.progreso = 100;
    }

    if(this.progreso <= 0 && valor <= 0){
      this.valorEmitido.emit( 0 );
      return this.progreso = 0;
    }
    this.valorEmitido.emit( this.progreso );
  }

  onChange( evento:number ){

    if( evento >= 100 ){
      this.progreso = 100;

    }else if( evento <= 0){
      this.progreso = 0;

    }else{
      this.progreso = evento;
    }
    
    this.valorEmitido.emit( this.progreso );
  }

}
