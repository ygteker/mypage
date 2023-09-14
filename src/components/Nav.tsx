import { FC } from 'react';
import { Link } from 'react-router-dom';

interface NavProps {}

const Nav: FC<NavProps> = () => {
  return (
    <nav className="flex justify-around p-4">
      <Link className="hover:underline" to="/">
        Home
      </Link>
      <Link className="hover:underline" to="/about">
        About
      </Link>
      <Link className="hover:underline" to="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
