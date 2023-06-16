import { render, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import PokemonTable from './PokemonTable';

describe(`PokemonTable`, () => {
  test(`loading the table`, async () => {
    const pokemonTable = await waitFor(() =>
      render(
        <PokemonTable
          tableData={{
            count: 0,
            next: ``,
            previous: ``,
            results: [
              {
                name: `bulbasaur`,
                url: `https://pokeapi.co/api/v2/pokemon/1/`,
              },
            ],
          }}
        />,
      ),
    );
    expect(await pokemonTable).toBeTruthy();
  });
});
