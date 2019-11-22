import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepService} from '../services/CepService';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cadastro de dados Pessoais';
  formDadosPessoais: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private cepService: CepService, private toastr: ToastrService) {
    
    this.formDadosPessoais = this.formBuilder.group({
      nome:  ['', Validators.compose([
          Validators.required
        ])],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      senha : ['', Validators.compose([
        Validators.required
      ])],
      cpf: ['', Validators.compose([
        Validators.required
      ])],
      cnpj: ['', Validators.compose([
        Validators.required
      ])],
      telefone : ['', Validators.compose([
        Validators.required
      ])],
      celular : ['', Validators.compose([
        Validators.required
      ])],
      cep : ['', Validators.compose([
        Validators.required
      ])],
      logradouro : ['', Validators.compose([
        Validators.required
      ])],
      bairro : ['', Validators.compose([
        Validators.required
      ])],
      cidade : ['', Validators.compose([
        Validators.required
      ])],
      estado : ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),

      ])],
      nascimento : ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  get form() { return this.formDadosPessoais.controls; }

  buscarCep(){
    const formValue = this.formDadosPessoais.value;

    if(formValue.cep.length  === 8){
      this.cepService.buscar(formValue.cep).subscribe((cep) => {
        console.log(cep);
        this.formDadosPessoais.patchValue({
          
          bairro: cep.bairro,
          cidade: cep.cidade,
          complemento: cep.complemento,
          estado: cep.estado,
          logradouro: cep.logradouro
          
        });
      });
    }
  }

  limparCampos(){
    this.formDadosPessoais.patchValue({
          
      nome : '',
          email: '',
          senha: '',
          cpf: '',
          cnpj: '',
          telefone: '',
          celular: '',
          cep: '',
          logradouro: '',
          bairro: '',
          cidade: '',
          estado: '',
          nascimento: ''
      
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.formDadosPessoais.invalid) {
      return;
    }

    this.toastr.success('Dados Pessoais', 'Cadastro Efetuado com sucesso!', {
      timeOut: 20000,
      tapToDismiss: true,
    }).onTap;
    
  }

}
