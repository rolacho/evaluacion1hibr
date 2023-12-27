import { Component, OnInit } from '@angular/core';
import { IonList,IonCard,IonCardHeader,IonCardContent,IonCardTitle, IonItem, IonInput, IonButton,IonCardSubtitle  } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Circulo } from '../modelo/calcularPerimetro';


@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [FormsModule,IonCard,IonCardHeader,IonCardContent,IonCardTitle, IonList, IonItem, IonInput, IonButton,IonCardSubtitle ]
})
export class CirculoComponent  implements OnInit {
  perimetroCirculoStr: string = "";
  resultado: string = ""

  constructor() { }

  ngOnInit() {}

  calcularElPerimetro(){
    const perimetroCirculo = parseFloat(this.perimetroCirculoStr)
    const calcularPerimetro = new Circulo(perimetroCirculo)
    const perimetro = calcularPerimetro.calcularElPerimetro()
    this.resultado = `El perimetro es ${perimetro} cm`
  }

}
