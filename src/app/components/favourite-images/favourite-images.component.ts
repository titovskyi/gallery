import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageService } from 'src/app/services/imageService/image.service';
import { Subscription } from 'rxjs';
import { IImage } from 'src/app/interfaces/image';

@Component({
  selector: 'app-favourite-images',
  templateUrl: './favourite-images.component.html',
  styleUrls: ['./favourite-images.component.scss']
})
export class FavouriteImagesComponent implements OnInit, OnDestroy {
  favouriteImg: IImage[];
  page = 1;
  beginImage = 0;
  endImage = 10;

  private subscribtion: Subscription[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    const subscribeFavouriteList = this.imageService.getFavouriteList().subscribe((data: IImage[]) => {
      this.favouriteImg = data;
    });
    this.subscribtion.push(subscribeFavouriteList);
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

  countTotalPages() {
    if (this.page === 1) {
      this.beginImage = 0;
      this.endImage = 10;
    } else {
      this.beginImage = ((this.page - 1) * 10);
      this.endImage = this.page * 10;
    }
  }

  setPrevPage() {
    if (this.page > 1) {
      this.page--;
      this.countTotalPages();
    }
    return;
  }

  setNextPage() {
    if ((this.page) * 10 > this.favouriteImg.length - 1) {
      return;
    }
    this.page++;
    this.countTotalPages();
  }
}
