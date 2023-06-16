import Header from '@/components/Header';
import PokemonTable from '@/components/PokemonTable';
import { PokemonTableData } from '@/interfaces/Interfaces';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';

import './index.scss';
const App = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [tableData, setTableData] = useState<PokemonTableData>({
    count: 0,
    next: ``,
    previous: ``,
    results: [],
  });
  const [limitPerPage, setLimitPerPage] = useState<string | number>(20);

  /**
   * fetchNewTableData will fetch from the pokemon api and pass in the current
   * page result limit.
   * @param next true if the next button was pressed
   * @param previous true if the previous button was pressed
   */
  const fetchNewTableData = (next: boolean, previous: boolean) => {
    setLoading(true);
    const fetchUrl =
      next && tableData.next
        ? tableData.next
        : previous && tableData.previous
        ? tableData.previous
        : `https://pokeapi.co/api/v2/pokemon/?limit=${limitPerPage}`;
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        setTableData(result);
      })
      .catch((error) => {
        setLoading(false);
        setTableData(error);
      });
  };

  /**
   * SortByName creates a temp copy of the current tableData.results, sorts
   * it either ascending order or descending order, then sets tableData
   * with the new results.
   * @param ascending If true, the names are A-Z. If false, they are Z-A.
   * @returns null; sets the tableData value with a new array for the results
   * field.
   */
  const sortByName = (ascending: boolean) => {
    if (!tableData) return [];
    let newTableData = [...tableData.results];

    if (ascending) {
      newTableData = tableData.results.sort((a, b) => {
        if (a.name > b.name) return 1;
        return -1;
      });
    } else {
      newTableData = tableData.results.sort((a, b) => {
        if (a.name < b.name) return 1;
        return -1;
      });
    }
    console.log(`newTableData`, newTableData);
    setTableData({ ...tableData, results: newTableData });
  };

  useEffect(() => {
    fetchNewTableData(false, false);
  }, [limitPerPage]);

  return (
    <div>
      <Header />
      <main>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div id="navigate_table_btns">
              <button
                className="link_button"
                onClick={() => {
                  if (tableData && tableData.next) {
                    fetchNewTableData(false, true);
                  }
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} /> Previous Page
              </button>

              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Sort Names...
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  label="Age"
                  onChange={(e) => {
                    if (e.target.value === `Ascending`) sortByName(true);
                    else if (e.target.value === `Descending`) sortByName(false);
                    else fetchNewTableData(false, false);
                  }}
                >
                  <MenuItem value={``}>Reset</MenuItem>
                  <MenuItem value={`Ascending`}>Ascending</MenuItem>
                  <MenuItem value={`Descending`}>Descending</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Results per page
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  value={limitPerPage}
                  label="Age"
                  onChange={(e) => setLimitPerPage(e.target.value)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </Select>
              </FormControl>

              <button
                className="link_button"
                onClick={() => {
                  if (tableData && tableData.next) {
                    fetchNewTableData(true, false);
                  }
                }}
              >
                Next Page <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <PokemonTable tableData={tableData} />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
