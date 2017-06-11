import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Album } from '../classes/album';

const base_url = 'https://jsonplaceholder.typicode.com/albums'

@Injectable()
export class AlbumService {

  constructor(private http: Http) { }
  
  /**
   * Returns user's list of albums
   * 
   * @param  {number} userId 
   * @return {Promise<Album[]>}
   */
  getAlbums(userId: number): Promise<Album[]> {
    const url = `${base_url}?userId=${userId}`;
    return this.http.get(url)
      .toPromise()
      .then(res => {
        return res.json() as Album[];
      })
  }
}
