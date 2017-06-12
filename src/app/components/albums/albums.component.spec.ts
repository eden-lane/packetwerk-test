import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Album } from '../../classes/album';
import { AlbumService } from '../../services/album.service';
import { AlbumsComponent } from './albums.component';

class AlbumServiceMock {
  public albums: Album[] = [];
  
  getAlbums(userId: number): Promise<Album[]> {
    return Promise.resolve(this.albums)
  }
}

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: AlbumService, useClass: AlbumServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
