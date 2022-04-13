import { Component, Host, h, Prop, Fragment } from '@stencil/core';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


@Component({
  tag: 'proton-slideshow',
  styleUrl: 'proton-slideshow.css',
  shadow: true,
})
export class ProtonSlideshow {
  swiper = new Swiper('.swiper',{
    modules: [Navigation],
    loop: true,
    direction: 'horizontal',

    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },

  })
  
  //Props for slideshow component
  @Prop() showArrow: boolean = true;

  render() {
    return (
      <Host class="swiper">
        <div class="swiper-wrapper">
          <slot></slot>
        </div>
        {
          this.showArrow &&
          <Fragment>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </Fragment>
        }
      </Host>
    );
  }

}
