import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SingleItemCarouselComponent} from './single-item-carousel/single-item-carousel.component';


@NgModule({
  declarations: [
    SingleItemCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SingleItemCarouselComponent
  ]
})
export class CarouselsModule {
}
