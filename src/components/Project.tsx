import { FC } from 'react';

interface ProjectProps {
  name: string;
  pictures: string[];
  description: string;
  link: string;
}

const Project: FC<ProjectProps> = (props) => {
  return (
    <div className="flex flex-col h-full">
      <h2>{props.name}</h2>
      <div className="flex flex-row">
        {props.pictures.map((image, index) => (
          <img
            className={`m-4 rounded-lg shadow-md h-96 w-48`}
            src={image}
            alt={props.name}
          ></img>
        ))}
        <p className="place-self-center ml-36">{props.description}</p>
      </div>
      <a href={props.link}>Link to GitHub</a>
    </div>
  );
};

export default Project;
