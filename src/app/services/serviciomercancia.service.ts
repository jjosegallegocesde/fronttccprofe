import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
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


}
