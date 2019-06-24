import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTest';

  nombre = '';
  apellido = '';
  edad = 26;
  email = 'andrex.silva.777@gmail.com';
  sueldos = [1700, 1600, 1500];
  activo = true;
  contador = 1;

  // metood para saber si el empleado esta activo o no
  esActivo() {

    if (this.activo) {
      return 'El empleado esta activo';
    } else {
      return 'El empleado esta inactivo';
    }
  }

  // metodo para hacer la suma de los sueldos del empleado
  ultimos3Sueldos() {

    let suma = 0;

// tslint:disable-next-line: prefer-for-of
    for (let x = 0; x < this.sueldos.length; x++) {
      suma = suma + this.sueldos[x];
    }

    return suma;
  }

  // metodo para incrementar y decrementar un valor
  incrementar() {

    this.contador++;

  }

  // metodo para decrementar un valor
  decrementar() {

    this.contador--;

  }
}
