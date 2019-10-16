import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.scss']
})
export class TelaComponent implements OnInit {
  Nome = '';
  CPF = '';
  Idade = '';
  Endereco = '';
  Sexo = '';

  NomeCriptografado = '';
  CPFCriptografado = '';
  IdadeCriptografado = '';
  EnderecoCriptografado = '';
  SexoCriptografado = '';

  NomeNormal = '';
  CPFNormal = '';
  IdadeNormal = '';
  EnderecoNormal = '';
  SexoNormal = '';
  constructor() { }

  ngOnInit() {
  }

  copyObject(object: any) {
    return JSON.parse(JSON.stringify(object));
  }

}
