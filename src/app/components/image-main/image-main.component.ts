import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageService } from '../../services/imageService/image.service';
import { IImage } from '../../interfaces/image';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-image-main',
  templateUrl: './image-main.component.html',
  styleUrls: ['./image-main.component.scss']
})
export class ImageMainComponent implements OnInit, OnDestroy {
  images: IImage[];
  favouriteImg: IImage[];
  page = 1;

  private subscribtion: Subscription[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    const subscribeFavouriteList = this.imageService.getFavouriteList().subscribe((data: IImage[]) => {
      this.favouriteImg = data;
    });
    const subscribeGetImageList = this.imageService.getImagesList(this.page - 1).subscribe((data: IImage[]) => {
      data.map((img: IImage): IImage => {
        const favouriteImage = this.favouriteImg.find((favImg: IImage) => favImg.id === img.id);
        if (favouriteImage) {
          img.favourite = favouriteImage.favourite;
          return img;
        }
        return img;
      });
      this.images = data;
    });
    this.subscribtion.push(subscribeGetImageList, subscribeFavouriteList);
  }

  ngOnDestroy() {
    this.subscribtion.forEach(subscribtion => {
      subscribtion.unsubscribe();
    });
  }

  changeImageFavourite(image) {
    let removeFavourite = this.favouriteImg;
    image.favourite = !image.favourite;

    if (image.favourite) {
      this.favouriteImg.push(image);
    } else {
      removeFavourite = this.favouriteImg.filter((img) => img.id !== image.id);
    }

    this.imageService.setFavouriteList(removeFavourite);
  }

  setPrevPage() {
    if (this.page > 1) {
      this.page--;
      this.imageService.getImages(this.page - 1);
    }
    return;
  }

  setNextPage() {
    this.page++;
    this.imageService.getImages(this.page - 1);
  }

}
