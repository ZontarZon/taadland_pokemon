import Header from '@/components/Header';
import PokemonTable from '@/components/PokemonTable';
import { PokemonTableData } from '@/interfaces/Interfaces';
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

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20`)
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        setTableData(result);
      })
      .catch((error) => {
        setLoading(false);
        setTableData(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <main>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <PokemonTable tableData={tableData} />
        )}
      </main>
    </div>
  );
};

export default App;
