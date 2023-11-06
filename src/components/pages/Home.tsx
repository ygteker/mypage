import { FC } from 'react';
import pp from '../../assets/pp.png';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className="h-screen grid grid-cols-2 content-center p-12">
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
        <div>
          <h2>Green Streaming</h2>
          <p>A .NET project to measure energy consumption of media streaming on different devices. </p>
          <a href='https://github.com/ygteker/awt-pj-ss23-green-streaming-1'>https://github.com/ygteker/awt-pj-ss23-green-streaming-1</a>
        </div>
        <div>
          <h2>Imaginator App</h2>
          <p>A multiplatform react app for generating images using stable diffusion on device. </p>
          <a href='https://github.com/ygteker/ImaginatorApp'>https://github.com/ygteker/ImaginatorApp</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
