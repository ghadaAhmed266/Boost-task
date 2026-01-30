import { Routes } from '@angular/router';
import { Role } from './pages/role/role';
import { Data } from './pages/data/data';
import { roleGuard } from './core/guards/role-guard';

export const routes: Routes = [
    {path:'',component:Role,pathMatch:'full'},
    {path:'role',component:Role},
    {path:'data',component:Data,canActivate:[roleGuard]}
];
