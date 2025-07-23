import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripComponent } from './trip/trip.component';
import { TripFormComponent } from './trip/trip-form/trip-form.component';
import { TripListComponent } from './trip/trip-list/trip-list.component';
import { DriverComponent } from './driver/driver.component';
import { DriverFormComponent } from './driver/driver-form/driver-form.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';

import { VehicleFormComponent } from './vehicle/vehicle-form/vehicle-form.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'vehicle/form', component: VehicleFormComponent },
  { path: 'vehicle/list', component: VehicleListComponent },
  { path: 'driver', component: DriverComponent },
  { path: 'driver/form', component: DriverFormComponent },
  { path: 'driver/list', component: DriverListComponent },
  { path: 'trip', component: TripComponent },
  { path: 'trip/form', component: TripFormComponent },
  { path: 'trip/list', component: TripListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
