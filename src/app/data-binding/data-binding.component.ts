import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `.highlight {
        background-color: yellow;
        font-weight: bold;
      }
   `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = "http:loiane.com";
  cursoAngular = true;
  urlImagem = "http://lorempixel.com.br/400/200/nature";
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nome: string = 'abc';
  pessoa: any = {
    nome : 'def',
    idade : 20
  };

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert("Clicado");
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  
  setNome(nome : any) {
    this.nome = nome;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
