export class Cep {

    constructor(cep : string,
        logradouro: string,
        complemento: string,
        bairro: string,
        cidade: string,
        estado: string){
            this.cep = cep;
            this.logradouro = logradouro;
            this.complemento = complemento;
            this.bairro = bairro;
            this.cidade = cidade;
            this.estado = estado;

        }
        
    cep : string;
        logradouro: string;
        complemento: string;
        bairro: string;
        cidade: string;
        estado: string;
}