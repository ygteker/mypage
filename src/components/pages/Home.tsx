import { FC } from 'react';
import pp from '../../assets/pp.png';
import Project from '../Project';
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className="h-auto grid grid-cols-2 content-center p-12">
      <img src={pp} alt="pp content-center h-96" />
      <p className="flex items-center h-96 ">
        Experienced Software Developer adept in bringing forth expertise in
        design, installation, testing and maintenance of software systems.
        Proficient in various platforms, languages, and embedded systems.
        Experienced with the latest cutting edge development tools and
        procedures.
      </p>
      <section className="mt-24">
        <h2>Projects</h2>
        <Project
          name="My Project"
          description="My project description"
          link="https://www.google.com"
          pictures={[p1, p2, p3]}
        />
      </section>
    </div>
  );
};

export default Home;
