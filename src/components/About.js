import classes from 'About.module.css';

const About = () => {
  return (
    <React.Fragment>
      <h1 className={classes.greeting}>Hi I am Gunes</h1>
      <h2 className={classes.summary}>
        I develop web and mobile applications using JavaScript, Java and Kotlin
      </h2>
    </React.Fragment>
  );
};

export default About;
