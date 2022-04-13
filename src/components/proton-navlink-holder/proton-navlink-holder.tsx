import { Component, h } from '@stencil/core';

@Component({
  tag: 'proton-navlink-holder',
  styleUrl: './proton-navlink-holder.css',
  shadow: true,
})
export class ProtonNavlinkHolder {

  render() {
    return (
      <ul class="list">
        <slot></slot>
      </ul>
    );
  }

}
