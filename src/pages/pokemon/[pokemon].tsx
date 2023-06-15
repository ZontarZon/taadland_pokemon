import Title from '@/components/Title';

type PokemonName = {
  pokemon: string;
};

const Home = (props: { params: PokemonName }) => {
  const param = props.params;
  console.log(param);
  return (
    <main>
      <Title>{param.pokemon}</Title>
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
      </p>
    </main>
  );
};

export default Home;
