import Header from '@/components/Header';
import { PokemonDetailedInfo } from '@/interfaces/Interfaces';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { useEffect, useState } from 'react';
import './pokemon.scss';

/**
 * PokemonInfo
 * @param props PokemonID, the integer of the pokemon's id.
 * @returns {html} A pokedex entry for the pokemon
 */
const PokemonInfo = (props: { params: { pokemonId: number | string } }) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [pokemonData, setPokemonData] = useState<PokemonDetailedInfo>({
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: ``,
    moves: [],
    name: ``,
    order: 0,
    past_abilities: [],
    past_types: [],
    species: [],
    sprites: [],
    stats: [],
    types: [],
    weight: 0,
  });

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.params.pokemonId}/`)
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        setPokemonData(result);
        console.log(result);
      })
      .catch((error) => {
        setLoading(false);
        setPokemonData(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Link className="link_button" to={`/`}>
        <FontAwesomeIcon icon={faArrowLeft} /> Go back
      </Link>
      {loading ? (
        <div id="pokemon_info_body">Loading...</div>
      ) : (
        <div id="pokemon_info_body">
          <div>Base experience: {pokemonData.base_experience}</div>
          <div>height: {pokemonData.height}</div>
          <div>ID: {pokemonData.id}</div>
          <div>Encounters: {pokemonData.location_area_encounters}</div>
          <div>Name: {pokemonData.name}</div>
          <div>Order: {pokemonData.order}</div>
          <div>Weight: {pokemonData.weight}</div>
        </div>
      )}
    </div>
  );
};

export default PokemonInfo;
