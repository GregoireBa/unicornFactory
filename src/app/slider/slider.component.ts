import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Navigation } from "swiper";
import { UnicornsService } from '../factory/unicorns.service';


SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-slider',
  template: `<swiper
    [slidesPerView]="3"
    [spaceBetween]="30"
    [slidesPerGroup]="3"
    [loop]="false"
    [loopFillGroupWithBlank]="true"
    [pagination]="{
      clickable: true
    }"
    [navigation]="true"
    class="mySwiper"
  >
    <ng-template swiperSlide *ngFor="let unicorn of unicorns">

    <div class="card-unicorn">

      <i class="fa-solid fa-unicorn" style="color:{{unicorn.payload.doc.data().color}}"></i>

      <div class="container-card-info name-card">{{unicorn.payload.doc.data().name}}</div>
      <div class="container-card-info">{{unicorn.payload.doc.data().color}}</div>
      <div class="container-card-info">{{unicorn.payload.doc.data().gender}}</div>
      <div class="container-card-info">{{unicorn.payload.doc.data().age}}</div>

    </div>

    </ng-template>

  </swiper>`,
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class SliderComponent implements OnInit {
  unicorns;
  id;

  constructor(private _unicornsService: UnicornsService) { }

  ngOnInit() {
    this.getUnicornList();
  }

  getUnicornList = () =>
    this._unicornsService
      .GetUnicornList()
      .subscribe(res => {
        this.unicorns = res;
      });


}