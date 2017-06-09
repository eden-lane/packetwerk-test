import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../classes/user';

const base_url = 'https://jsonplaceholder.typicode.com/users'

@Injectable()
export class UserService {
    
  constructor(private http: Http) {}
  
  /**
   * Returns users
   * 
   * @return {Promise<User[]>} 
   */
  getUsers(): Promise<User[]> {
    return this.http.get(base_url)
      .toPromise()
      .then(res => { 
        return res.json() as User[];
      })
  }
}
