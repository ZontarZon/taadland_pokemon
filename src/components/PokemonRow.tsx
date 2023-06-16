import { PokemonTyping } from '@/interfaces/Interfaces';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { useEffect, useState } from 'react';
import './PokemonTable.scss';
/**
 * PokemonRow Is used to display information for a single pokemon in the table
 * of pokemon.
 * @param props The name and url of the pokemon
 * @returns {html} A div containing the id, name, types, and sprite of the
 * pokemon.
 */
const PokemonRow = (props: { name: string; url: string }) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<{ message: string }>({ message: `` });
  const [sprite, setSprite] = useState<String>(``);
  const [types, setTypes] = useState<PokemonTyping>({
    primary: ``,
    secondary: ``,
  });
  const [id, setId] = useState<number>(0);

  /**
   * fetchDataForRow will set the sprite url, types, and the id. Triggered
   * on load and with name changes.
   */
  const fetchDataForRow = () => {
    setLoading(true);
    fetch(props.url)
      .then((res) => res.json())
      .then((results) => {
        setLoading(false);
        setSprite(results.sprites.front_default);

        setTypes({
          primary: results.types[0].type.name,
          secondary: results.types[1] ? `, ${results.types[1].type.name}` : ``,
        });

        if (results.id) setId(results.id);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchDataForRow();
  }, [props.name]);

  return (
    <div className="pokemon_table_entry_container">
      {loading ? (
        <div>Loading...</div>
      ) : error.message ? (
        <div>{error.message}</div>
      ) : (
        <div>
          {/* Row for a pokemon result on the index page table */}
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
          <Link
            className="link_button view_more_btn"
            to={`pokemon/${props.name}/`}
          >
            View more <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default PokemonRow;
