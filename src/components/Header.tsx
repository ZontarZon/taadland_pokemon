import { Link } from 'gatsby';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <Link id="h1_link" to="/">
        <h1>{`Toto's PokeDex`}</h1>
      </Link>
      <hr />
    </header>
  );
};

export default Header;
