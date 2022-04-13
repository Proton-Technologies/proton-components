import { Component, Fragment, h, Prop } from '@stencil/core';

@Component({
  tag: 'proton-navbar',
  styleUrl: 'proton-navbar.css',
  shadow: true,
})
export class ProtonNavbar {

  @Prop() spacing:'between'|'around'|'evenly'= 'between';
  @Prop() fixed: boolean = false;
  
  render() {
    return (
      <Fragment>
      <nav class={`${this.fixed ? 'fixed':'free'}`}>
        <div class={`navbar-inner ${this.spacing}`}>
          <slot></slot>
        </div>
      </nav>
      </Fragment>
    );
  }

}
