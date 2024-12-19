import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, 
  IonList, IonSelect, IonItem, IonSelectOption, IonText, 
SelectChangeEventDetail} from '@ionic/angular/standalone';
import { CirculoComponent } from "../b_circulo/circulo.component";
import { TrianguloEscalenoComponent } from "../c_triangulo-escaleno/triangulo-escaleno.component";
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonSelect, IonItem, IonSelectOption, 
    CirculoComponent, TrianguloEscalenoComponent, CommonModule],
})
export class HomePage implements OnInit{

  componente = ""

  constructor() {}

  ngOnInit() {}

  handleChange($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.componente = $event.target.value?? ""
  }
}
