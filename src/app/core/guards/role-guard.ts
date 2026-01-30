import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RoleService } from '../services/role-service';

export const roleGuard: CanActivateFn = (route, state) => {
 const _route=inject(Router)
 const _role=inject(RoleService)
  if(_role.role())
   return true;
  else
  {
    _route.navigate(['/role'])
    return false;
  }
};
