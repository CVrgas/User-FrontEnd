import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getSome(){
    return this.http.get('https://localhost:7183/api/users')
  }
  addSome(user: any){
    return this.http.post('https://localhost:7183/api/user', user)
  }
  getThis(id: string): Observable<user>{
    return this.http.get<user>('https://localhost:7183/api/user/'+ id);
  }
  updateUser(id: string, updatedUser: user): Observable<user>
  {
    return this.http.put<user>('https://localhost:7183/api/user/'+ id, updatedUser)
  }
  deleteUser(id: string)
  {
    return this.http.delete('https://localhost:7183/api/user/'+ id)
  }
}
