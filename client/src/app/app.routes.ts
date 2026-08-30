import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { Owners } from '../features/owners/owners';
import { Prices } from '../features/prices/prices';
import { Vehicles } from '../features/vehicles/vehicles';
import { authGuard } from '../core/gaurds/auth-guard';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'owners', component: Owners, canActivate:[authGuard]},
  {path: 'prices', component: Prices},
  {path: 'vehicles', component: Vehicles},
  {path: '**', component: Home},
];
