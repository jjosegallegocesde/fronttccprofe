import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ServiciomercanciaService } from '../services/serviciomercancia.service';

@Component({
  selector: 'app-formularioregistro',
  templateUrl: './formularioregistro.component.html',
  styleUrls: ['./formularioregistro.component.css']
})
export class FormularioregistroComponent implements OnInit {

  formulario!:FormGroup;

  constructor(
    public fabricaDiccionario:FormBuilder,
    public servicio:ServiciomercanciaService
    
    ) { 

      /*this.servicio.consultarMercancias()
      .subscribe(respuesta=>{
        console.log(respuesta);
        
      })*/

    }

  ngOnInit(): void {

    this.formulario=this.inicializarFormulario()

  }

  buscarMercancia(){
    console.log("buscando...");
    console.log(this.formulario.value.iup)
    this.servicio.consultarMercancia(this.formulario.value.iup)
    .subscribe(respuesta=>{
      console.log(respuesta);
      this.formulario.patchValue({
    
        nombreremitente:respuesta.nombreRemitente,
        idremitente:respuesta.idRemitente
        
      })
      
    })
    
    
  }

  public analizarFormulario():void{
    console.log(this.formulario.value)
  }

  public inicializarFormulario():FormGroup{
    return this.fabricaDiccionario.group({
      iup:['',[Validators.required,Validators.minLength(1)]],
      tiporemitente:['',[Validators.required]],
      idremitente:['',[Validators.required]],
      nombreremitente:['',[Validators.required]],
      deptoremitente:['',[Validators.required]],
      municipioremitente:['',[Validators.required]],
      direccionremitente:['',[Validators.required]],
      tipodestinatario:['',[Validators.required]],
      iddestinatario:['',[Validators.required]],
      nombredestinatario:['',[Validators.required]],
      deptodestinatario:['',[Validators.required]],
      municipiodestinatario:['',[Validators.required]],
      direcciondestinatario:['',[Validators.required]],
    })
  }

}
