import { Component } from '@angular/core';
import {GatosService} from 'app/gato.service';
import {IGato} from 'app/I.gato';
import {OnInit} from '@angular/core';  

@Component({
  selector: 'visor-gatos',
  templateUrl: './visorgatos.component.html',
  /**template: `<div class='wrapper'>
<div *ngFor="let gato of gatos" class="Acontainer" [routerLink]="['/lafamilia', gato.Nombre]">
  <div  class="container" [ngStyle]="{'background-image': 'url(' + gato.Foto + ')','background-position':'center'}">
        
        


</div>    
<div class='nombre'> {{gato.Nombre}}<div>
</div>
</div>`, **/

  styleUrls: ['./visorgatos.component.css'],
  
})
export class VisorGatos implements OnInit{
  title = 'app works!';
  gatos : IGato[] ;
  errorMessage: string;
  

  ngOnInit(): void {
    this._gatosService.getGatos().subscribe(gatos => this.gatos = gatos, 
    error => this.errorMessage = <any>error);
  }
  
  constructor(private _gatosService: GatosService){
    
  }
}
