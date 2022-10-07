import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { LegendPosition } from '@swimlane/ngx-charts';
import { ServiciomercanciaService } from '../services/serviciomercancia.service';

@Component({
  selector: 'app-graficabarras',
  templateUrl: './graficabarras.component.html',
  styleUrls: ['./graficabarras.component.css']
})
export class GraficabarrasComponent  {

  view: [number,number] = [700, 400];

  zonas:any;

  datos:any;

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#0D540A', '#070D7E', '#D66A10',"#D6B810"],
  };


  

  constructor(public servicio:ServiciomercanciaService) {
    //Object.assign(this, { single });

    servicio.consultarMercancias(5)
    .subscribe(respuesta=>{

      this.datos=respuesta
      
      this.datos = respuesta.map((zona:any)=>{
        return {name:zona.nombre, value: zona.disponible}
      })

      
    }) 

  }

  get single(){
    return this.datos
  }
  
  

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
