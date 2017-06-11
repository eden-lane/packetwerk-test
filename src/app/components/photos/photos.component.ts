import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Photo } from '../../classes/photo';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  
  photos: Photo[];

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.photoService.getPhotos(+params['albumId']))
      .subscribe(photos => this.photos = photos)
  }

}
