import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map, retry, take, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() {
        
    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe( 
    //   valor =>{
    //     console.log('Valor:', valor);
    //   },
    //   error =>{
    //     console.error('Hubo un error:', error);
    //   },
    //   ()=>{
    //     console.warn('obs$ termindado');
    //   }
    // )
    

    this.intervalSubs = this.retornaIntervalo().subscribe( valor=>{
      console.log(valor);
    });

  }


  ngOnDestroy(): void{
    this.intervalSubs.unsubscribe();
    console.log('Saliendo y Desuscribiendo');
  }



  
  retornaIntervalo(): Observable<string>{
    return interval(100)
    .pipe(
      map( valor => valor + 1 ),
      take(20),
      filter( val=>{
        return (val % 2 === 1)? true : false ;
      }),
      map( valor =>{
        return 'Hola Mundo '+ valor
      })
    );
  }

  retornaObservable():Observable<number> {

    let i = -1;
    
    return new Observable<number>( observer =>{
      

      const intervalo = setInterval( ()=> {
        i++;
        observer.next( i );

        if( i === 5 ){
          clearInterval( intervalo );
          observer.complete();
        }
        
        if( i === 2 ){
          // console.log('i llego a 2!!!');
          // i = 0;
          observer.error('i llegó a 2');
        }

      }, 1000);

    });

  }

  




}
