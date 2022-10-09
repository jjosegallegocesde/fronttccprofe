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

  datos:any[]=[];

  bandera:boolean=false;

  constructor(
    public fabricaDiccionario:FormBuilder,
    public servicio:ServiciomercanciaService
    
    ) {}

  ngOnInit(): void {
    this.formulario=this.inicializarFormulario()
    this.servicio.consultarMercancias(5)
      .subscribe(respuesta=>{
        this.datos = respuesta.map((zona:any)=>{
        return {id:zona.id}
      })
    })
  }

  buscarMercancia(){
   
    this.servicio.consultarMercancia(this.formulario.value.iup)
    .subscribe(
      
      respuesta=>{

        console.log(respuesta);
        this.bandera=false
        this.formulario.patchValue({
          
          tiporemitente:respuesta.tipoRemitente,
          idremitente:respuesta.idRemitente,
          nombreremitente:respuesta.nombreRemitente,
          deptoremitente:respuesta.deptoRemitente,
          municipioremitente:respuesta.municipioRemitente,
          direccionremitente:respuesta.direccionRemitente,

          tipodestinatario:respuesta.tipoDestinatario,
          iddestinatario:respuesta.idDestinatario,
          nombredestinatario:respuesta.nombreDestinatario,
          deptodestinatario:respuesta.deptoDestinatario,
          municipiodestinatario:respuesta.municipioDestinatario,
          direcciondestinatario:respuesta.direccionDestinatario,

          //zonaOcupada:'2'

          
        })

        this.formulario.disable()
        this.formulario.controls['iup'].enable()
        this.formulario.controls['zonaOcupada'].enable()
        
      
    },
    error=>{
      this.bandera=true
      this.formulario.enable()
      console.log(error.error)
    }
    
    
    )
    
    
  }

  public analizarFormulario():void{

    let datos=this.formulario.value
    let zona={
      id:this.formulario.value.zonaOcupada
    }
    datos.volumen=10
    datos.zona=zona

    
    this.servicio.registrarMercancia(datos)
      .subscribe(respuesta=>{
        console.log(respuesta)
        window.location.reload()
      }
      
      )
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
      zonaOcupada:['2']
    })
  }

}
