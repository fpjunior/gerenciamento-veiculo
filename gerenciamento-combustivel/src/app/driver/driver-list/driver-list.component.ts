import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';
import { Driver } from '../driver.model';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss'],
  standalone: false
})
export class DriverListComponent implements OnInit {
  drivers: Driver[] = [];

  constructor(private driverService: DriverService) {}

  ngOnInit(): void {
    this.driverService.getDrivers().subscribe((data) => {
      this.drivers = data;
    });
  }
}
