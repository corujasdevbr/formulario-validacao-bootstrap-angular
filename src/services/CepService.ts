import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Cep} from "../models/cep";
import { map } from 'rxjs/operators';

@Injectable()
export class CepService {
  resultado:Cep;
  constructor(private http:HttpClient) {}

    buscar(cep:string){
      return this.http
          .get(`https://viacep.com.br/ws/${cep}/json/`)
          .pipe(map((data: any) => this.resultado = this.converterRespostaParaCep(data)))
    }

    private converterRespostaParaCep(cepNaResposta):Cep{
        let cep = new Cep(cepNaResposta.cep,
                          cepNaResposta.logradouro,
                          cepNaResposta.complemento,
                          cepNaResposta.bairro, 
                          cepNaResposta.localidade, 
                          cepNaResposta.uf);

        return cep;
    }

}