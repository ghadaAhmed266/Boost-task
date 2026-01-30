import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleService } from './role-service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  _role=inject(RoleService)
  getDataByRole():Observable<any[]> {
    const apiMap: Record<string, string> = {
      Admin: 'https://dummyjson.com/users',
      Instructor: 'https://dummyjson.com/posts',
      User: 'https://fakestoreapi.com/products',
      Student:'https://jsonplaceholder.typicode.com/posts'
    };

    return this.http.get<any[]>(apiMap[this._role.role()]);
  }
}
