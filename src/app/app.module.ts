import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {VisorGatos} from './visorgatos/visorgatos.component';
import {  RouterModule} from "@angular/router";
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { GatoDetalleComponent } from './gato-detalle/gato-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    VisorGatos,
    QuienesSomosComponent,
    GatoDetalleComponent,
    
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'quienessomos', component: QuienesSomosComponent},
      {path:'lafamilia', component: VisorGatos},
      {path:'lafamilia/:id', component: GatoDetalleComponent,},
      {path: '', redirectTo:'quienessomos', pathMatch:'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
