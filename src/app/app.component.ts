import { Component } from '@angular/core';
import {GatosService} from 'app/gato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GatosService]
})
export class AppComponent{
  title = 'app works!';
}
