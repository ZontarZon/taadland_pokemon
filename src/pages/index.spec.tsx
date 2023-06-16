import { render, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './index';
describe(`index`, () => {
  it(`renders the indexPage without crashing`, () => {
    const indexPage = render(<App />);
    waitFor(() => expect(indexPage).toBeInTheDocument());
  });
});
