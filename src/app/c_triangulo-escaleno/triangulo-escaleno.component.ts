import { Component, OnInit } from '@angular/core';
import { Triangulo } from '../a_figura-geometrica/figura-geometrica.component';
import { IonItem, IonInput, IonList, IonButton, IonText, IonCard, IonImg } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-triangulo-escaleno',
  templateUrl: './triangulo-escaleno.component.html',
  styleUrls: ['./triangulo-escaleno.component.scss'],
  standalone: true,
  imports: [IonImg, IonCard, IonText, IonItem, IonInput, IonList, IonButton, FormsModule]
})
export class TrianguloEscalenoComponent  implements OnInit {
  txtLadoA = ""
  txtLadoB = ""
  txtLadoC = ""
  perimetro = 0
  triangulo = new Triangulo("triangulo", 0,0,0)
  resultado = ""

  constructor() { }

  calcularPerimetro() {
    this.triangulo.ladoA = parseInt(this.txtLadoA)
    this.triangulo.ladoB = parseInt(this.txtLadoB)
    this.triangulo.ladoC = parseInt(this.txtLadoC)
    this.perimetro = this.triangulo.calcularPerimetro()
    this.resultado = "El perimetro del circulo es de "+this.perimetro;
  }

  ngOnInit() {}

}
