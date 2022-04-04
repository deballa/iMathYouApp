import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Atributos
  public nomeUsuario:string = "Déborah";
  public idade:number = 37;

  constructor() {
    this.somarDoisNumeros(2,8);
    this.somar(10,27);
    this.subtrair(27,10);
    this.multiplicar(5,5);
    this.dividir(10,5);
  }

  //Metodos
  //public somar(/*parametros*/) : void (o void é quando não retorna valor)
  public somarDoisNumeros(n1:number, n2:number) : void {
    let resultado:number = n1 + n2; //let é variável local
    console.log("Resultado = " + resultado);
  }

  public somar(n1:number, n2:number) : void {
    let resultado:number = n1 + n2;
    console.log("Soma = " + resultado);
  }

  public subtrair(n1:number, n2:number) : void {
    let resultado:number = n1 - n2;
    console.log("Subtração = " + resultado);
  }

  public multiplicar(n1:number, n2:number) : void {
    let resultado:number = n1 * n2;
    console.log("Multiplicação = " + resultado);
  }

  public dividir(n1:number, n2:number) : void {
    let resultado:number = n1 / n2;
    console.log("Divisão = " + resultado);
  }

}
