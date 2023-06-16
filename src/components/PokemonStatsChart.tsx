import { PokemonDetailedInfo } from '@/interfaces/Interfaces';
import { Chart as ChartJS, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'react-chartjs-2';
ChartJS.register(ChartDataLabels);
ChartJS.register(...registerables);
const PokemonStatsChart = (props: { pokemonData: PokemonDetailedInfo }) => {
  return (
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
                props.pokemonData.stats[0].base_stat,
                props.pokemonData.stats[1].base_stat,
                props.pokemonData.stats[2].base_stat,
                props.pokemonData.stats[3].base_stat,
                props.pokemonData.stats[4].base_stat,
                props.pokemonData.stats[5].base_stat,
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
            props.pokemonData.stats[0].stat.name,
            props.pokemonData.stats[1].stat.name,
            props.pokemonData.stats[2].stat.name,
            props.pokemonData.stats[3].stat.name,
            props.pokemonData.stats[4].stat.name,
            props.pokemonData.stats[5].stat.name,
          ],
        }}
      />
    </div>
  );
};

export default PokemonStatsChart;
