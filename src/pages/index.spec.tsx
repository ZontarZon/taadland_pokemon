import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import App from './index';
describe(`index`, () => {
  beforeEach(async () => {
    const indexPage = await waitFor(() => render(<App />));
    expect(await indexPage).toBeTruthy();
  });
  test(`clicking the next button`, async () => {
    const nextBtn = screen.getByText(`Next Page`);
    fireEvent.click(nextBtn);
    const viewMoreBtn = await waitFor(() => screen.getByText(`View more`));
    expect(viewMoreBtn).toBeTruthy();
  });
});
