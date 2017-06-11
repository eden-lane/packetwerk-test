import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Album } from '../../classes/album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  
  albums: Album[];

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.albumService.getAlbums(+params['userId']))
      .subscribe(albums => this.albums = albums)
  }

}
