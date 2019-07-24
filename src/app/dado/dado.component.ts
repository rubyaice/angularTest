import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  valor: number;

  constructor() { }

  hacereso() {

    this.valor = Math.trunc(Math.random() * 6 ) + 1;
  }

  ngOnInit() {

    this.valor = Math.trunc(Math.random() * 6 ) + 1;
  }

  traerAlgo() {

  }

}
