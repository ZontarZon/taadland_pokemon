import { render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import PokemonInfo from './[pokemonId]';

/* vitest and jest don't natively support testing for canvas elements, so
it's necessary to have a mock for the bar chart. */
const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal(`ResizeObserver`, ResizeObserverMock);

describe(`PokemonTable`, () => {
  it(`renders the pokemon's page given the id`, () => {
    const table = render(<PokemonInfo params={{ pokemonId: 1 }} />);

    waitFor(() => expect(table).toBeInTheDocument());
  });
});

describe(`PokemonTable`, () => {
  it(`renders the pokemon's page given the pokemon name`, () => {
    const table = render(<PokemonInfo params={{ pokemonId: `squirtle` }} />);

    waitFor(() => expect(table).toBeInTheDocument());
  });
});

describe(`PokemonTable`, () => {
  it(`when rendering the pokemon's page, catches an invalid value`, () => {
    const table = render(
      <PokemonInfo params={{ pokemonId: `notARealPokemon` }} />,
    );

    waitFor(() => expect(table).toBeInTheDocument());
  });
});
