import { Injectable } from '@angular/core';
import {IGato} from './I.gato';
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class GatosService{
  

private _productUrl ='./Lista Gatos.json';
constructor(private _http: Http){}
 
getGatos(): Observable<IGato[]>{
    return this._http.get(this._productUrl).
    map((response: Response) => <IGato[]>response.json()).
    do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
}

/* Searches array objects to match the id*/
    getGato(id: string): Observable<IGato> {
        return this.getGatos()
            .map((gatos: IGato[]) => gatos.find(p => p.Nombre === id))
            .do(data => console.log('Gato individual: ' + JSON.stringify(data)));/*prints individual object. It does work */
    }



private handleError(error: Response){
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }
 }
