import { newSpecPage } from '@stencil/core/testing';
import { ProtonButton } from '../proton-button';

describe('proton-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProtonButton],
      html: `<proton-button></proton-button>`,
    });
    expect(page.root).toEqualHtml(`
      <proton-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </proton-button>
    `);
  });
});
