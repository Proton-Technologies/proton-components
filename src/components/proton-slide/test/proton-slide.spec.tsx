import { newSpecPage } from '@stencil/core/testing';
import { ProtonSlide } from '../proton-slide';

describe('proton-slide', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProtonSlide],
      html: `<proton-slide></proton-slide>`,
    });
    expect(page.root).toEqualHtml(`
      <proton-slide>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </proton-slide>
    `);
  });
});
