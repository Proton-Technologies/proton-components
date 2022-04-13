import { Component, h, Prop, State, Host, Event } from '@stencil/core';

@Component({
  tag: 'proton-button',
  styleUrl: 'proton-button.css',
  shadow: true,
})
export class ProtonButton {

  @Prop() radius:'sm'|'md'|'lg'|'none' = 'sm';
  @Prop() color:string;
  @Event() clicked: any;
  @Prop() href: string | any;

  @State() style = {}

  componentWillLoad(){
    this.style = {
      backgroundColor: this.color,
    }
  }

  render() {
    return (
      <Host>
        <a href={this?.href} title={this.href}>
          <button onClick={this?.clicked} style={this.style} class={`${this.radius}`} type='button' title='button' >
            <slot/>
          </button>
        </a>
      </Host>
    );
  }

}
