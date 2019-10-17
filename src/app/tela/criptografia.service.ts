import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CriptografiaService {

  constructor(private http: HttpClient) { }

  criptografar(mensagem: string) {
    return this.http.post<Mensagem>('https://localhost:44335/api/criptografia/criptografar', {
        mensagem: mensagem
    });
  }

  descriptografar(mensagem: string) {
    return this.http.post<Mensagem>('https://localhost:44335/api/criptografia/descriptografar', {
        mensagem: mensagem
    });
  }
}

export class Mensagem {
  mensagem: string;
}
