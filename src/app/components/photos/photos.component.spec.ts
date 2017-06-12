import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Photo } from '../../classes/photo';
import { PhotoService } from '../../services/photo.service';
import { PhotosComponent } from './photos.component';

class PhotoServiceMock {
  public photos: Photo[] = [];
  
  getPhotos(albumId: number): Promise<Photo[]> {
    return Promise.resolve(this.photos)
  }
}

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: PhotoService, useClass: PhotoServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
