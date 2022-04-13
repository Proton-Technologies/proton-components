import { newE2EPage } from '@stencil/core/testing';

describe('proton-slideshow', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<proton-slideshow></proton-slideshow>');

    const element = await page.find('proton-slideshow');
    expect(element).toHaveClass('hydrated');
  });
});
