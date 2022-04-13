import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'proton-navlink',
  styleUrl: 'proton-navlink.css',
  shadow: true,
})
export class ProtonNavlink {
  @Prop() href: string;

  render() {
    return (
      <li>
        <a title={this.href} href={this.href}>
          <slot></slot>
        </a>
      </li>
    );
  }

}
