import { Component } from '@angular/core';
import { VehicleHttpService } from '../vehicle-http.service';
import { Vehicle } from '../vehicle.model';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss'],
  standalone: false
})
export class VehicleFormComponent {
  nome = '';
  placa = '';
  vinculo = '';
  vinculoDescricao = '';
  tipoCombustivel = '';

  constructor(private vehicleService: VehicleHttpService) {}

  onSubmit(): void {
    const novoVeiculo: Vehicle = {
      nome: this.nome,
      placa: this.placa,
      vinculo: this.vinculo,
      vinculoDescricao: this.vinculoDescricao,
      tipoCombustivel: this.tipoCombustivel
    };
    this.vehicleService.addVehicle(novoVeiculo).subscribe({
      next: () => {
        // Limpar campos após sucesso
        this.nome = '';
        this.placa = '';
        this.vinculo = '';
        this.vinculoDescricao = '';
        this.tipoCombustivel = '';
      },
      error: (err: any) => {
        // Tratar erro se necessário
        console.error('Erro ao cadastrar veículo:', err);
      }
    });
  }
}
