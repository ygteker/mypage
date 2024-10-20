import { FC, useState } from 'react';

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const [myState, setMyState] = useState('test')

  return (
    <div>
      <div className="resume p-12">
        <section className="education">
          <h2 className="text-2xl">Education</h2>
          <div className="education-item">
            <h3>Degree in Computer Science and Statistics</h3>
            <p>University of Munich</p>
            <p className="date">Graduated: Feb 2021</p>
            <p>
              Bachelor's Thesis: Bachelor Thesis: Pre-clustering for statistical
              relation data analysis using the example of the coronavirus
              epidemic
            </p>
          </div>
        </section>

        <section className="experience">
          <h2>Work Experience</h2>
          <div className="experience-item">
            <h3>Fullstack Web Developer</h3>
            <p>VOQUZ Digital Experts GmbH</p>
            <p className="date">September 2022 - September 2023</p>
            <p>
              In this position, I was responsible for developing management
              software dedicated to serving the public sector. To achieve this,
              I utilized modern technologies such as Quarkus with Java 17,
              StencilJS, Hibernate, and MSSQL, ensuring the software was robust
              and efficient. To maintain its reliability, I conducted thorough
              testing using JUnit and Spock with Groovy, resolving any issues to
              ensure a seamless user experience. Working collaboratively with a
              skilled team, we designed and optimized the software to meet the
              specific needs and high standards of the public sector.
            </p>
          </div>
          <div className="experience-item">
            <h3>Java Developer</h3>
            <p>iic-solutions GmbH</p>
            <p className="date">March 2022 - September 2022</p>
            <p>
              I was tasked with developing APIs to enhance their services. Using
              Java EE with Java 8, Hibernate, MapStruct, and SQL, I built robust
              APIs that met the specific needs of the insurance industry. To
              ensure their reliability, I conducted thorough testing with JUnit,
              promptly addressing any identified issues. The successful
              implementation of these APIs contributed to improved efficiency
              and customer satisfaction for the company.
            </p>
          </div>
          <div className="experience-item">
            <h3>IT Consultant</h3>
            <p>amasol AG</p>
            <p className="date">March 2021 - March 2022</p>
            <p>
              During my consulting engagement, I specialized in monitoring
              software, providing expert guidance to clients. I employed a range
              of technologies such as Moogsoft, Splunk, and Kafka to develop
              tailored monitoring solutions that met their specific
              requirements. To analyze and process data effectively, I utilized
              tools like SPL and influxDB on CentOS. Additionally, I ensured
              smooth data collection and visualization by implementing
              OpenTelemetry, empowering clients to optimize their systems and
              make informed decisions based on the insights provided by the
              monitoring software.
            </p>
          </div>
          <div className="experience-item">
            <h3>Android Developer</h3>
            <p>adabay GmbH</p>
            <p className="date">March 2021 - March 2022</p>
            <p>
              In my role, I developed an Android app in Java tailored for an
              insurance company, ensuring a user-friendly experience and meeting
              their specific needs. Additionally, I contributed to the voluntary
              humanitarian organization by developing web services using Jakarta
              EE, enabling them to streamline their processes and expand their
              outreach. These efforts resulted in the successful delivery of a
              functional Android app for the insurance company and efficient web
              services for the humanitarian organization, making a positive
              impact on both entities and their respective audiences.
            </p>
          </div>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>TypeScript</li>
            <li>HTML/CSS</li>
            <li>Node.js</li>
            <li>Java</li>
            <li>Docker</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
