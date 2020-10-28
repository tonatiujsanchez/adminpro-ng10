import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  //Grafica 1
  labels = ['Abarrotes', 'Electronica', 'Limpieza'];
  valores = [
    [650, 350, 530]
  ];
  colores =  [
    { backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ] }
  ];

  //Grafica 2
  labelsMed = ['Legado', 'Despertar', 'Diario'];
  valoresMed = [
    [750, 320, 530]
  ];
  coloresMed =  [
    { backgroundColor: [ '#ffdd00', '#008000', '#7ED955' ] }
  ];

  //Grafica 3
  labelsMx = ['Desarrollo', 'Diseño', 'Social Media'];
  valoresMx = [
    [710, 620, 510]
  ];
  coloresMx =  [
    { backgroundColor: [ '#0278ae', '#ff4b5c', '#158467' ] }
  ];

  //Grafica 4
  labelsSkill = ['Angular', 'Flutter', 'NodeJS', 'React'];
  valoresSkill = [
    [710, 620, 510, 850],
    [710, 620, 510, 850]
  ];
  coloresSkill =  [
    { backgroundColor: [ '#cf1b1b', '#3282b8', '#438a5e', '#a6dcef' ] }
  ];




}
