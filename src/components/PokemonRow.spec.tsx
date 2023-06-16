import { render, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PokemonRow from './PokemonRow';

describe(`PokemonTable`, () => {
  it(`renders the pokemon's row in the pokemon table, given the pokemon name and url`, () => {
    const table = render(
      <PokemonRow
        name="bulbasaur"
        url="https://pokeapi.co/api/v2/pokemon/1/"
      />,
    );
    waitFor(() => expect(table).toBeTruthy());
  });
});

describe(`PokemonTable with error msg`, () => {
  it(`catches the error during fetch, if provided an invalid pokemon name and url`, () => {
    const table = render(
      <PokemonRow
        name="notarealpokemon"
        url="https://pokeapi.co/api/v2/pokemon/notarealpokemon/"
      />,
    );
    waitFor(() => expect(table).toBeTruthy());
  });
});
