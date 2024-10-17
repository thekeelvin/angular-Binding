import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrls: ['./apolice-seguro.component.css']
})
export class ApoliceSeguroComponent {
  nomeSegurado: string = '';
  sexo: string = '';
  idade: number | null = null;
  valorAutomovel: number | null = null;
  valorApolice: number | null = null;

  // Método para calcular o valor da apólice
  calcularApolice() {
    if (this.sexo === 'masculino' && this.idade !== null && this.valorAutomovel !== null) {
      if (this.idade <= 25) {
        this.valorApolice = this.valorAutomovel * 0.15; // 15% do valor do automóvel
      } else {
        this.valorApolice = this.valorAutomovel * 0.10; // 10% do valor do automóvel
      }
    } else if (this.sexo === 'feminino' && this.valorAutomovel !== null) {
      this.valorApolice = this.valorAutomovel * 0.08; // 8% do valor do automóvel
    } else {
      this.valorApolice = null; // Caso algum dado esteja faltando
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
