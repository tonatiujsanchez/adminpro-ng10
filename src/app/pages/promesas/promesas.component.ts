import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    
    this.getUsuarios().then(
      data=>{
        // console.log(data);
      }
    );
    
    
    // const promesa = new Promise( ( resolve, reject ) =>{
    
    //   if ( !true ) {
    //     resolve('Hola mundo desde la promesa.');
    //   } else {
    //     reject( 'Algo salio mal.' );
    //   }      
    // });
    
    // promesa.then( ( mensaje )=>{
    //   console.log(mensaje);
    // }).catch(( error )=>{
    //   console.log( 'Hubo un error:',error ); 
    // });

    // console.log('Fin del onInit');
    
  }

  
  getUsuarios(){

    return new Promise( resolve =>{

    fetch('https://reqres.in/api/users?page=2')
                .then( resp => resp.json() )
                .then( body => resolve( body.data ) );

    });

  }




}
