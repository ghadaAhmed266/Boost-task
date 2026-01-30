import { Component ,OnDestroy,OnInit,signal} from '@angular/core';
import { DataService } from '../../core/services/data-service';
import { RoleService } from '../../core/services/role-service';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ViewIf } from '../../core/directives/view-if';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';


interface Column {
    field: string;
    header: string;
}
@Component({
  selector: 'app-data',
  imports: [
    FormsModule,
    //custome directive
    ViewIf,
    //Primeng modules
    RatingModule,ProgressSpinnerModule,TableModule,TagModule,ButtonModule
  ],
  templateUrl: './data.html',
  styleUrl: './data.css',
})
export class Data implements OnInit,OnDestroy{
  data= signal<any[]|any>([]);
  loading=signal(true);
  error=signal(false);

  constructor(private _data:DataService,public _role:RoleService) {}
 

  ngOnInit() {
    this._data.getDataByRole().subscribe({
      next: (res) =>{
        this.data.set(res);
        this.loading.set(false);
        this.error.set(false);
      },
      error: (err) =>{
        this.error.set(true);
        this.loading.set(false);
      } 
    });
  }
  ngOnDestroy(): void {
    this._role.setRole('');
  }
}
