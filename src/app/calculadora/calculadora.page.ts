import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})

export class CalculadoraPage {
  // Atributos
  public n1:number;
  public n2:number;
  public resultado:number;  

  //Métodos
  public somar() : void {
    this.resultado = this.n1 + this.n2;
  }

  public subtrair() : void {
    this.resultado = this.n1 - this.n2;
  }

  public multiplicar() : void {
    this.resultado = this.n1 * this.n2;
  }

  public dividir() : void {
    this.resultado = this.n1 / this.n2;
  }
}
