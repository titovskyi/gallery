import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IImage } from '../../interfaces/image';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imagesBehavior = new BehaviorSubject<IImage[]>([]);
  private favouriteBehavior = new BehaviorSubject<IImage[]>([]);

  constructor(private http: HttpClient) {}

  getImages(page) {
    const params = new HttpParams()
    .set('page', page)
    .set('client_id', environment.CLIEN_ID);

    return this.http
      .get(
        environment.unsplash.getImages, {params}
      ).pipe(
        map((data: any): IImage[] => {
          console.log(data, 'full Data');
          return data.map((image): IImage => {
            return {
              id: image.id,
              url: image.urls.regular,
              favourite: false
            };
          });
        })
      ).subscribe((res: IImage[]) => {
        console.log(this.imagesBehavior.getValue());
        this.setImageList(res);
      });
  }

  getImagesList(page): Observable<IImage[]> {
    this.getImages(page);
    return this.imagesBehavior.asObservable();
  }

  setImageList(images: IImage[]) {
    this.imagesBehavior.next(images);
  }

  get allImages(): IImage[] {
    return this.imagesBehavior.getValue();
  }

  getFavouriteList() {
    return this.favouriteBehavior.asObservable();
  }

  setFavouriteList(favImages) {
    return this.favouriteBehavior.next(favImages);
  }

  get allFavouriteImages(): IImage[] {
    return this.favouriteBehavior.getValue();
  }
}
