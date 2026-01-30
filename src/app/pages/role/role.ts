import { Component, signal  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { RoleService } from '../../core/services/role-service';
import { Router } from '@angular/router';
interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}
@Component({
  selector: 'app-role',
  imports: [AutoCompleteModule, FormsModule],
  templateUrl: './role.html',
  styleUrl: './role.css',
})
export class Role {
  items:any[]|undefined;
  
  constructor(public _role:RoleService,private _route:Router){}
 //add roles to dropdown on open the dropdown
  search() {
    this.items= ['Admin','Instructor','User','Student'];
  }
  //this method called on dropdown value changed when the user select role
  onChange(selected: string) {
    this._role.setRole(selected);
    this._route.navigate(['/data']);
  }
}