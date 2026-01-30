import { Component } from '@angular/core';
import { RoleService } from '../../services/role-service';
import { ViewIf } from "../../directives/view-if";

@Component({
  selector: 'app-header',
  imports: [ViewIf],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header{
 
  constructor(public _role:RoleService) {}

}
