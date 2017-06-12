import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Album } from '../../classes/album';
import { AlbumService } from '../../services/album.service';
import { AlbumsComponent } from './albums.component';

class AlbumServiceMock {
  public albums: Album[] = [
    { title: 'album 1', userId: 1, id: 1 },
    { title: 'album 2', userId: 1, id: 2}
  ];
  
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
  
  it('should display all returned albums', async(inject([], () => {
    // https://media3.giphy.com/media/lXiRG1vwLewnehlxS/giphy.gif
    fixture.whenStable()
    .then(() => {
      fixture.detectChanges();
      return fixture.whenStable();
    })
    .then(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('li').length).toBe(2)
    })
    
    const compiled = fixture.debugElement.nativeElement;
  })))
  
  it('should have link to album preview', async(inject([], () => {
    // https://media3.giphy.com/media/lXiRG1vwLewnehlxS/giphy.gif
    fixture.whenStable()
    .then(() => {
      fixture.detectChanges();
      return fixture.whenStable();
    })
    .then(() => {
      const compiled = fixture.debugElement.nativeElement;
      const links = compiled.querySelectorAll('a')
      expect(links[0].pathname).toBe('/albums/1');
      expect(links[1].pathname).toBe('/albums/2');
    })
    
    const compiled = fixture.debugElement.nativeElement;
  })))
});
