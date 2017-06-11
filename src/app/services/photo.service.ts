import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Photo } from '../classes/photo';

const base_url = 'https://jsonplaceholder.typicode.com/photos'

@Injectable()
export class PhotoService {

  constructor(private http: Http) { }
  
  /**
   * Returns list of photos from a specific album
   * @param  {number} albumId
   * @return {Promise<Photo[]>}
   */
  getPhotos(albumId: number): Promise<Photo[]> {
    const url = `${base_url}?albumId=${albumId}`;
    return this.http.get(url)
      .toPromise()
      .then(res => {
        return res.json() as Photo[];
      })
  }

}
