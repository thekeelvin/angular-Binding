import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent {
  ra: string = '';
  nome: string = '';
  email: string = '';
  celular: string = '';

  // Exemplo simples de envio (exibe no console)
  enviarFormulario() {
    if (this.ra && this.nome && this.email && this.celular) {
      console.log('Cadastro de Aluno:', {
        ra: this.ra,
        nome: this.nome,
        email: this.email,
        celular: this.celular
      });
      alert('Cadastro realizado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}
