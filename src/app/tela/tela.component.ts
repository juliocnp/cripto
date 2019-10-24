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
    if (this.Nome && this.Nome !== '') {
      this.criptografia.criptografar(this.Nome).subscribe(
        result => {
          this.NomeCriptografado = result.mensagem;
        }
      );
    }
    if (this.CPF && this.CPF !== '') {
      this.criptografia.criptografar(this.CPF).subscribe(
        result => {
          this.CPFCriptografado = result.mensagem;
        }
      );
    }
    if (this.Idade && this.Idade !== '') {
      this.criptografia.criptografar(this.Idade).subscribe(
        result => {
          this.IdadeCriptografado = result.mensagem;
        }
      );
    }
    if (this.Endereco && this.Endereco !== '') {
      this.criptografia.criptografar(this.Endereco).subscribe(
        result => {
          this.EnderecoCriptografado = result.mensagem;
        }
      );
    }
    if (this.Sexo && this.Sexo !== '') {
      this.criptografia.criptografar(this.Sexo).subscribe(
        result => {
          this.SexoCriptografado = result.mensagem;
        }
      );
    }
  }

  descriptografar() {
    if (this.NomeCriptografado && this.NomeCriptografado !== '') {
      this.criptografia.descriptografar(this.NomeCriptografado).subscribe(
        result => {
          this.NomeNormal = result.mensagem;
        }
      );
    }
    if (this.CPFCriptografado && this.CPFCriptografado !== '') {
      this.criptografia.descriptografar(this.CPFCriptografado).subscribe(
        result => {
          this.CPFNormal = result.mensagem;
        }
      );
    }
    if (this.IdadeCriptografado && this.IdadeCriptografado !== '') {
      this.criptografia.descriptografar(this.IdadeCriptografado).subscribe(
        result => {
          this.IdadeNormal = result.mensagem;
        }
      );
    }
    if (this.EnderecoCriptografado && this.EnderecoCriptografado !== '') {
      this.criptografia.descriptografar(this.EnderecoCriptografado).subscribe(
        result => {
          this.EnderecoNormal = result.mensagem;
        }
      );
    }
    if (this.SexoCriptografado && this.SexoCriptografado !== '') {
      this.criptografia.descriptografar(this.SexoCriptografado).subscribe(
        result => {
          this.SexoNormal = result.mensagem;
        }
      );
    }
  }
}
