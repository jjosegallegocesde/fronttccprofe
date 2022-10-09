import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciomercanciaService {

 

  constructor(public peticion:HttpClient) {
    console.log("servicio cargado...");
  }


  consultarMercancias(id:number):Observable<any>{

    //let uri=`http://localhost:8080/api/tcc/mercancias/${id}`

    let uri="http://localhost:8080/api/tcc/zonas"

    return this.peticion.get(uri)

  }

  consultarMercancia(id:number):Observable<any>{

    let uri=`http://localhost:8080/api/tcc/mercancias/${id}`
    return this.peticion.get(uri)
    

  }

  registrarMercancia(datos:any):Observable<any>{
    
    let uri="http://localhost:8080/api/tcc/mercancias"
    return this.peticion.post(uri,datos)
  }

  retirarMercancia(iup:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    let uri=`http://localhost:8080/api/tcc/mercancias/${iup}`
    return this.peticion.delete(uri,httpOptions)
  }


}
