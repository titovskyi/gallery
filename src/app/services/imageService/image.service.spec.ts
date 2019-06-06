import { TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ImageService } from './image.service';

describe('ImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpModule
    ]
  }));

  it('should be created', () => {
    const service: ImageService = TestBed.get(ImageService);
    expect(service).toBeTruthy();
  });
});
