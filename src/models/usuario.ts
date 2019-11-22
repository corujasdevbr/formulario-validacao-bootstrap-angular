export class Usuario {

    constructor(nome: string, email: string,  senha: string, cpf: string, cnpj: string, telefone: string, celular: string, cep: string, logradouro: string, cidade: string, estado: string, nascimento:Date) {
      this.nome = nome;
      this.email = email;
      this.senha = senha;
      this.cpf = cpf;
      this.cnpj = cnpj;
      this.telefone = telefone;
      this.celular = celular;
      this.cep = cep;
      this.logradouro = logradouro;
      this.cidade = cidade;
      this.estado = estado;
      this.nascimento = nascimento;
    }
  
    nome: string;
    email: string;
    senha: string;
    cpf: string;
    cnpj: string;
    telefone: string;
    celular: string;
    cep: string;
    logradouro: string;
    cidade: string;
    estado: string;
    nascimento: Date
  }