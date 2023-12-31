import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PokemonStatsChart from '@/components/PokemonStatsChart';
import { PokemonDetailedInfo } from '@/interfaces/Interfaces';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { useEffect, useState } from 'react';
import './pokemon.scss';

/**
 * PokemonInfo contains all the page information for a single pokemon.
 * @param props PokemonID, the integer of the pokemon's id.
 * @returns {html} A pokedex entry for the pokemon
 */
const PokemonInfo = (props: { params: { pokemonId: number | string } }) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<{ message: string }>({ message: `` });
  const [pokemonData, setPokemonData] = useState<PokemonDetailedInfo>({
    abilities: [],
    base_experience: 0,
    forms: null,
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: ``,
    moves: [
      {
        move: {
          name: ``,
          url: ``,
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: ``,
              url: ``,
            },
            version_group: {
              name: ``,
              url: ``,
            },
          },
        ],
      },
    ],
    name: ``,
    order: 0,
    past_abilities: [],
    past_types: [],
    species: null,
    sprites: null,
    stats: [
      {
        base_stat: 0,
        effort: 0,
        stat: {
          name: ``,
          url: ``,
        },
      },
      {
        base_stat: 0,
        effort: 0,
        stat: {
          name: ``,
          url: ``,
        },
      },
      {
        base_stat: 0,
        effort: 0,
        stat: {
          name: ``,
          url: ``,
        },
      },
      {
        base_stat: 0,
        effort: 0,
        stat: {
          name: ``,
          url: ``,
        },
      },
      {
        base_stat: 0,
        effort: 0,
        stat: {
          name: ``,
          url: ``,
        },
      },
      {
        base_stat: 0,
        effort: 0,
        stat: {
          name: ``,
          url: ``,
        },
      },
    ],
    types: [
      {
        slot: 0,
        type: {
          name: ``,
          url: ``,
        },
      },
    ],
    weight: 0,
  });

  /**
   * Fetches all information on one pokemon.
   */
  const fetchPokemonWholeData = () => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.params.pokemonId}/`)
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        setPokemonData(result);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPokemonWholeData();
  }, []);

  return (
    <div>
      <Header />
      <Link className="link_button" to={`/`}>
        <FontAwesomeIcon icon={faArrowLeft} /> Go back
      </Link>
      {loading ? (
        <div id="pokemon_info_body">Loading...</div>
      ) : error.message ? (
        <div id="pokemon_info_body">
          An error occurred. Please try again later.
          <br />
          {error.message}
        </div>
      ) : (
        <div id="pokemon_info_body">
          {/* First container: name, id, weight, height. */}
          <div id="basic_info_container" className="info_container">
            <div>
              <h2 id="pokemon_name">{pokemonData.name}</h2>
              <div>
                Types:{` `}
                {pokemonData.types[0].type.name}
                {pokemonData.types[1]
                  ? `, ${pokemonData.types[1].type.name}`
                  : ``}
              </div>
              <div>Id: {pokemonData.id}</div>
              <div>Height: {pokemonData.height}</div>
              <div>Weight: {pokemonData.weight}</div>
            </div>
            <div>
              <img
                src={`${
                  pokemonData.sprites ? pokemonData.sprites.front_default : ``
                }`}
                alt={`${pokemonData.name} sprite`}
              />
            </div>
          </div>
          {/* Bar chart container */}
          {!loading && <PokemonStatsChart pokemonData={pokemonData} />}
          {/* Moves list container */}
          <div className="info_container">
            <div className="move_row_hr">
              <p>Move Name</p>
              <p>Level Earned</p>
              <p>Method</p>
            </div>
            {pokemonData.moves.map((value, id) => {
              return (
                <div className="move_row" key={id}>
                  <p>{value.move.name}</p>
                  {value.version_group_details[0].level_learned_at ? (
                    <p>{value.version_group_details[0].level_learned_at}</p>
                  ) : (
                    <p />
                  )}
                  {value.version_group_details[0].move_learn_method.name ? (
                    <p>
                      {value.version_group_details[0].move_learn_method.name}
                    </p>
                  ) : (
                    <p />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PokemonInfo;
