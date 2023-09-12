import { FC } from 'react';
import { Link } from 'react-router-dom';

interface NavProps {}

const Nav: FC<NavProps> = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="rounded-lg backdrop-blur-lg">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
