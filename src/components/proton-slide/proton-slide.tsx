import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'proton-slide',
  styleUrl: 'proton-slide.css',
})
export class ProtonSlide {

  render() {
    return (
      <Host class="swiper-slide">
        <slot></slot>
      </Host>
    );
  }

}
