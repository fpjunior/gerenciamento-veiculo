import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle.model';
import { VehicleHttpService } from '../vehicle-http.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
  standalone: false
})
export class VehicleListComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'placa', 'vinculo', 'vinculoDescricao', 'tipoCombustivel', 'acoes'];
  dataSource: Vehicle[] = [];

  constructor(private vehicleService: VehicleHttpService) {}

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe({
      next: (data) => {
        this.dataSource = data;
      },
      error: (err) => {
        console.error('Erro ao buscar veículos:', err);
      }
    });
  }

  // Métodos de edição e exclusão podem ser implementados futuramente usando a API REST
}
