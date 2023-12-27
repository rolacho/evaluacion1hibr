import { Component, OnInit } from '@angular/core';
import { IonList,IonCard,IonCardHeader,IonCardContent,IonCardTitle, IonItem, IonInput, IonButton,IonCardSubtitle } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from '../modelo/calcularPerimetro';
import { TrianguloEquilatero } from '../modelo/calcularPerimetro';


@Component({
  selector: 'app-triangulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [FormsModule,IonCard,IonCardHeader,IonCardContent,IonCardTitle, IonList, IonItem, IonInput, IonButton,IonCardSubtitle]
})
export class TrianguloComponent  implements OnInit {
  ladoAStr: string = "";
  ladoBStr: string = "";
  ladoCStr: string = "";
  resultado: string = "";
  resultado2 : string = "";

  constructor() { }

  ngOnInit() {}


  calcularElPerimetro() {
    const ladoA = parseFloat(this.ladoAStr); 
    const ladoB = parseFloat(this.ladoBStr);
    const ladoC = parseFloat(this.ladoCStr);
    const triangulo = new TrianguloEscaleno(ladoA, ladoB, ladoC);
    const perimetro = triangulo.calcularElPerimetro();
    this.resultado = (`El perímetro es ${perimetro} cm `);

    const triangulo2 = new TrianguloEquilatero(ladoA);
    const perimetro2 = triangulo2.calcularElPerimetro();
    this.resultado2 = (`El perimetro es ${perimetro2} cm`);


  }

  
}



