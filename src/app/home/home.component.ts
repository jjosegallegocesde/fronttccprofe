import { Component, OnInit } from '@angular/core';
import { ServiciomercanciaService } from '../services/serviciomercancia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  datosZona:any[]=[]

  constructor(public servicio:ServiciomercanciaService) {

    servicio.consultarMercancias(5)
    .subscribe(respuesta=>{
      console.log(respuesta);
      this.datosZona=respuesta
    })


  }


 

}
