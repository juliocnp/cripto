import { Component, OnInit } from '@angular/core';
import { CriptografiaService } from './criptografia.service';

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

  constructor(private criptografia: CriptografiaService) { }

  ngOnInit() {
  }

  copyObject(object: any) {
    return JSON.parse(JSON.stringify(object));
  }

  criptografar() {
    this.criptografia.criptografar(this.Nome).subscribe(
      result => {
        this.NomeCriptografado = result.mensagem;
      }
    )
    this.criptografia.criptografar(this.CPF).subscribe(
      result => {
        this.CPFCriptografado = result.mensagem;
      }
    )
    this.criptografia.criptografar(this.Idade).subscribe(
      result => {
        this.IdadeCriptografado = result.mensagem;
      }
    )
    this.criptografia.criptografar(this.Endereco).subscribe(
      result => {
        this.EnderecoCriptografado = result.mensagem;
      }
    )
    this.criptografia.criptografar(this.Sexo).subscribe(
      result => {
        this.SexoCriptografado = result.mensagem;
      }
    )
  }

  descriptografar() {
    this.criptografia.descriptografar(this.NomeCriptografado).subscribe(
      result => {
        this.NomeNormal = result.mensagem;
      }
    )
    this.criptografia.descriptografar(this.CPFCriptografado).subscribe(
      result => {
        this.CPFNormal = result.mensagem;
      }
    )
    this.criptografia.descriptografar(this.IdadeCriptografado).subscribe(
      result => {
        this.IdadeNormal = result.mensagem;
      }
    )
    this.criptografia.descriptografar(this.EnderecoCriptografado).subscribe(
      result => {
        this.EnderecoNormal = result.mensagem;
      }
    )
    this.criptografia.descriptografar(this.SexoCriptografado).subscribe(
      result => {
        this.SexoNormal = result.mensagem;
      }
    )
  }

}
