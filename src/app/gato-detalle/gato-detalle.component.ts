import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {GatosService} from 'app/gato.service';
import { IGato } from "app/I.gato";
import { Subscription }       from 'rxjs/Subscription';

@Component({

  templateUrl: './gato-detalle.component.html',
  styleUrls: ['./gato-detalle.component.css']
})
export class GatoDetalleComponent implements OnInit {

 pageTitle: string = 'gato detalle';
 gato: IGato;
 errorMessage: string;
 private sub: Subscription;
 prueba: string = "a ver ";


  constructor(private _route:ActivatedRoute,
     private _gatosService: GatosService) {
    console.log(this._route.snapshot.params['id']) /* prints id so i know it works */

    
   }

  ngOnInit(): void {
  /* Calls the service function using the route.params as argument */
    this.sub = this._route.params.subscribe(
      params => {
        let id = params['id'];
        this.getGato(id);
        
      
      
      }
    )
    
  }
/* Subscribes to the service getGato function and assigns it to variable gato*/
   getGato(id: string) {
        this._gatosService.getGato(id).subscribe(
            product => this.gato = product,
            error => this.errorMessage = <any>error);
            

  }
}
