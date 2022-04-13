import { newE2EPage } from '@stencil/core/testing';

describe('proton-slide', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<proton-slide></proton-slide>');

    const element = await page.find('proton-slide');
    expect(element).toHaveClass('hydrated');
  });
});
