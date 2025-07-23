import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle.model';

@Injectable({ providedIn: 'root' })
export class VehicleService {
  private vehicles: Vehicle[] = [
    {
      nome: 'Doblo',
      placa: 'QYA2334',
      vinculo: 'Educação',
      vinculoDescricao: 'FUNDO MUNICIPAL DE EDUCAÇÃO - QSE',
      tipoCombustivel: 'Flex'
    }
  ];

  getVehicles(): Vehicle[] {
    return [...this.vehicles];
  }

  addVehicle(vehicle: Vehicle): void {
    this.vehicles.push(vehicle);
  }

  updateVehicle(index: number, vehicle: Vehicle): void {
    this.vehicles[index] = vehicle;
  }

  deleteVehicle(index: number): void {
    this.vehicles.splice(index, 1);
  }
}
