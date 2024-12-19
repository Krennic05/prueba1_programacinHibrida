import { Component, OnInit } from '@angular/core';
import { Circulo } from '../a_figura-geometrica/figura-geometrica.component';
import { IonItem, IonInput, IonList, IonButton, IonText, IonCard, IonImg } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonImg, IonCard, IonText, IonItem, IonInput, IonList, IonButton, FormsModule]
})
export class CirculoComponent  implements OnInit {
  txtRadio = ""
  perimetro = 0
  circulo = new Circulo("circulo", 0)
  resultado = ""
  
  constructor() { }

  calcularPerimetro() {
    this.circulo.radio = parseInt(this.txtRadio)
    this.perimetro = this.circulo.calcularPerimetro()
    this.resultado = "El perimetro del circulo es de "+this.perimetro;
  }

  ngOnInit() {}

}
