import { newE2EPage } from '@stencil/core/testing';

describe('proton-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<proton-button></proton-button>');

    const element = await page.find('proton-button');
    expect(element).toHaveClass('hydrated');
  });
});
