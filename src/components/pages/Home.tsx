import { FC } from 'react';
import pp from '../../assets/pp.png';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className="min-h-screen bg-slate-400">
      <img src={pp} alt="pp" />
      <h1>Yagiz Gunes Teker</h1>
      <p>
        Experienced Software Developer adept in bringing forth expertise in
        design, installation, testing and maintenance of software systems.
        Proficient in various platforms, languages, and embedded systems.
        Experienced with the latest cutting edge development tools and
        procedures.
      </p>
      <h2>Projects</h2>
    </div>
  );
};

export default Home;
