import Header from '@/components/Header';
import { PokemonDetailedInfo } from '@/interfaces/Interfaces';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chart as ChartJS, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Link } from 'gatsby';
import { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import './pokemon.scss';
ChartJS.register(ChartDataLabels);
ChartJS.register(...registerables);
/**
 * PokemonInfo
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
    moves: [],
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

  useEffect(() => {
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
      });
  }, []);
  console.log(pokemonData.types);
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
          <div id="stats_chart_container">
            <Chart
              type="bar"
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxis: {
                    min: 0,
                    max: 255,
                    beginAtZero: true,
                  },
                  y: {
                    display: false,
                  },
                },
                plugins: {
                  title: {
                    display: true,
                    text: `Pokemon Stats`,
                  },
                  legend: {
                    display: false,
                  },
                  datalabels: {
                    display: true,
                    color: `black`,
                  },
                },
              }}
              data={{
                datasets: [
                  {
                    data: [
                      pokemonData.stats[0].base_stat,
                      pokemonData.stats[1].base_stat,
                      pokemonData.stats[2].base_stat,
                      pokemonData.stats[3].base_stat,
                      pokemonData.stats[4].base_stat,
                      pokemonData.stats[5].base_stat,
                    ],
                    backgroundColor: [
                      `rgb(220, 92, 230)`,
                      `rgb(255, 99, 132)`,
                      `rgb(35, 150, 250)`,
                      `rgb(252, 186, 3)`,
                      `rgb(92, 230, 110)`,
                      `rgb(152, 103, 230)`,
                    ],
                  },
                ],
                labels: [
                  pokemonData.stats[0].stat.name,
                  pokemonData.stats[1].stat.name,
                  pokemonData.stats[2].stat.name,
                  pokemonData.stats[3].stat.name,
                  pokemonData.stats[4].stat.name,
                  pokemonData.stats[5].stat.name,
                ],
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonInfo;
