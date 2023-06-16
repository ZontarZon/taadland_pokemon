import { PokemonTableData, PokemonTyping } from '@/interfaces/Interfaces';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { useEffect, useRef, useState } from 'react';
import './PokemonTable.scss';

/**
 * PokemonRow Is used to display information for a single pokemon in the table
 * of pokemon.
 * @param props The name and url of the pokemon
 * @returns {html} A div containing the id, name, types, and sprite of the
 * pokemon.
 */
const PokemonRow = (props: { name: string; url: string }) => {
  const [sprite, setSprite] = useState<String>(``);
  const [types, setTypes] = useState<PokemonTyping>({
    primary: ``,
    secondary: ``,
  });
  const [id, setId] = useState<number>(0);

  /**
   * getPokemonBasicInfo will fetch the id, types, and sprite of the pokemon
   * for display in the table row.
   */
  async function getPokemonBasicInfo() {
    const response = await fetch(props.url);
    const results = await response.json();
    console.log(results);
    if (results.sprites && results.sprites.front_default) {
      setSprite(results.sprites.front_default);
    }

    if (results.types && results.types[0]) {
      setTypes({
        primary: results.types[0].type.name,
        secondary: results.types[1] ? `, ${results.types[1].type.name}` : ``,
      });
    }

    if (results.id) setId(results.id);
  }

  useEffect(() => {
    getPokemonBasicInfo();
  }, [props.name]);

  return (
    <div className="pokemon_table_entry_container">
      <div className="pokemon_table_entry_data">
        <div className="pokemon_id">{id}</div>
        <div className="pokemon_name">{props.name}</div>
        <div className="pokemon_typing_container">
          {types.primary}
          {types.secondary}
        </div>
        {sprite && (
          <img
            className="pokemon_sprite_img"
            src={`${sprite}`}
            alt={`${props.name} sprite`}
            loading="lazy"
          />
        )}
      </div>
      <Link className="link_button" to={`pokemon/${props.name}/`}>
        View more <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
};

/**
 * PokemonTable: Creates a row for each pokemon fetched from the API.
 * @param props The fetched data from the pokemon API, containing the fetch
 * criteria and the list of pokemon.
 * @returns {html} A container and PokemonRow per pokemon in the results.
 */
const PokemonTable = (props: { tableData: PokemonTableData }) => {
  const TableHrRef = useRef(null);
  const [HrFixed, setHrFixed] = useState<Boolean>(false);

  /**
   * stickHr will set the table header row to relative or fixed, depending
   * on how far the user has scrolled down the page.
   * @returns null, sets HrFixed.
   */
  const stickHr = () => {
    if (window !== undefined) {
      if (TableHrRef === null || !TableHrRef.current) return;
      if (scrollY > 100 && !HrFixed) {
        setHrFixed(true);
      } else if (scrollY < 100 && HrFixed) {
        setHrFixed(false);
      }
    }
  };

  // this prevents continuous firing.
  useEffect(() => {
    window.addEventListener(`scroll`, stickHr, true);
    return () => {
      window.removeEventListener(`scroll`, stickHr, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [HrFixed]);

  if (!props.tableData) return <div>Null val</div>;

  return (
    <div>
      <div id={`hr_fixed_${HrFixed}`}>
        <div id="pokemon_list_hr" ref={TableHrRef}>
          <div className="pokemon_id">Id</div>

          <div className="pokemon_name">Name</div>
          <div className="pokemon_typing_container">Types</div>
          <div>Sprite</div>
        </div>
      </div>

      {props.tableData.results.map((value, index) => {
        return <PokemonRow key={index} name={value.name} url={value.url} />;
      })}
    </div>
  );
};

export default PokemonTable;
