import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private SelectedRole=signal('');
  readonly role=this.SelectedRole.asReadonly()
  public setRole(role:string)
  {
    this.SelectedRole.set(role);
  }
}
