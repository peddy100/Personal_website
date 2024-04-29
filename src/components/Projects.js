import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.jpg';
import projImg4 from '../assets/img/project-img4.jpg';
import projImg5 from '../assets/img/project-img5.jpg';
import projImg6 from '../assets/img/project-img6.jpg';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Projects = () => {
  const projects = [
    {
      title: 'Ludo Game',
      description: 'A Python implementation of a Ludo game with two main classes: Players and LudoGame',
      imgUrl: projImg1,
    },
    {
      title: 'Hash Map',
      description: 'HashMap in two forms: Separate Changing and Open Addressing with Quadratic Probing',
      imgUrl: projImg2,
    },
    {
      title: 'Breadth First Search',
      description: 'A Python implementation of a breadth first search aglorithim to find the shortest path in a 2D puzzle of size MxN',
      imgUrl: projImg3,
    },
    {
      title: 'Excercise App',
      description: 'A web app as a Single Page Application to track exercises',
      imgUrl: projImg4,
    },
    {
      title: 'Relational Database',
      description: 'A web based relational database system to track sales of omni-channel digital marketing solutions',
      imgUrl: projImg5,
    },
    {
      title: 'Child Development',
      description: 'A child development web app integrating multiple APIs and microservices ',
      imgUrl: projImg6,
    },
  ];

  const h2Ref = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
      const handleMouseover = event => {
          let iterations = 0;
          const interval = setInterval(() => {
              event.target.innerText = event.target.innerText.split("")
                  .map((letter, index) => {
                      if (index < iterations) {
                          return event.target.dataset.value[index];
                      }
                      return letters[Math.floor(Math.random() * letters.length)];
                  })
                  .join("");
              if (iterations >= event.target.dataset.value.length) {
                  clearInterval(interval);
              }
              iterations += 1/3;
          }, 30);
      };

      const h2Element = h2Ref.current;
      if( h2Element) {
          h2Element.addEventListener('mouseover', handleMouseover);
      }

      return () => {
          if (h2Element) {
              h2Element.removeEventListener('mouseover', handleMouseover);
          }
      };
  }, []);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <h2 ref={h2Ref} data-value="Projects">Projects</h2>
            <p>
            Explore a portfolio of my projects where each piece represents a unique fusion of innovative problem-solving and technical prowess, 
            showcasing my capabilities across a broad spectrum of technologies and demonstrating my commitment to pushing the boundaries of software engineering.
            </p>
          </Col>
        </Row>
        <Row>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
