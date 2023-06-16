import { PokemonTableData } from '@/interfaces/Interfaces';
import { useEffect, useRef, useState } from 'react';
import './PokemonTable.scss';

import PokemonRow from './PokemonRow';

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
