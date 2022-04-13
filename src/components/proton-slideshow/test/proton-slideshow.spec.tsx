import { newSpecPage } from '@stencil/core/testing';
import { ProtonSlideshow } from '../proton-slideshow';

describe('proton-slideshow', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProtonSlideshow],
      html: `<proton-slideshow></proton-slideshow>`,
    });
    expect(page.root).toEqualHtml(`
      <proton-slideshow>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </proton-slideshow>
    `);
  });
});
