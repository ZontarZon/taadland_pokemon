import { render, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PokemonTable from './PokemonTable';

describe(`PokemonTable`, () => {
  it(`renders the PokemonTable without crashing`, () => {
    const table = render(
      <PokemonTable
        tableData={{
          count: 0,
          next: ``,
          previous: ``,
          results: [
            { name: `bulbasaur`, url: `https://pokeapi.co/api/v2/pokemon/1/` },
          ],
        }}
      />,
    );

    waitFor(() => expect(table).toBeInTheDocument());
  });
});

describe(`PokemonTable`, () => {
  it(`renders the PokemonTable with an empty table without crashing`, () => {
    const table = render(
      <PokemonTable
        tableData={{
          count: 0,
          next: ``,
          previous: ``,
          results: [],
        }}
      />,
    );

    waitFor(() => expect(table).toBeInTheDocument());
  });
});
