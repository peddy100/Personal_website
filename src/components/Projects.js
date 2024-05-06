import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.jpg";
import projImg9 from "../assets/img/project-img9.PNG";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.jpg";
import projImg12 from "../assets/img/project-img12.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "AR Storybook",
      description:
        "An AR application built using Unity and Vuforia for The Tale of Peter Rabbit",
      imgUrl: projImg1,
      projectUrl: "",
    },
    {
      title: "Hash Map",
      description:
        "HashMap in two forms: Separate Changing and Open Addressing with Quadratic Probing",
      imgUrl: projImg2,
      projectUrl: "https://github.com/peddy100/Hash_Map",
    },
    {
      title: "Breadth First Search",
      description:
        "A Python implementation of a breadth first search aglorithim to find the shortest path in a 2D puzzle of size MxN",
      imgUrl: projImg3,
      projectUrl: "https://github.com/peddy100/BFS",
    },
    {
      title: "One-Time Pad",
      description: "A C program to encrypt and decrypt data with a one-time pad system using multiprocessing and sockets",
      imgUrl: projImg4,
      projectUrl: "https://github.com/peddy100/OTP",
    },
    {
      title: "Relational Database",
      description:
        "A web based relational database system to track sales of omni-channel digital marketing solutions",
      imgUrl: projImg5,
      projectUrl: "https://github.com/peddy100/Relational_Database",
    },
    {
      title: "Child Development",
      description:
        "A child development web app utlizing Express and Handlebars integrating multiple APIs and microservices",
      imgUrl: projImg6,
      projectUrl: "https://github.com/peddy100/Child_Development",
    },
    {
      title: "Ludo Game",
      description:
        "A Python implementation of a Ludo game with two main classes: Players and LudoGame",
      imgUrl: projImg7,
      projectUrl: "",
    },
    {
      title: "Flight Search App",
      description:
        "A flight search app utilizing Jetpack Compose, Kotlin, and data persistence using Room database framework",
      imgUrl: projImg8,
      projectUrl: "https://github.com/peddy100/Flight_Search_App",
    },
    {
      title: "Portfolio Website",
      description:
        "My portfolio website detailing my exeperience and skills. Developed using React, BootStrap and Framer Motion",
      imgUrl: projImg9,
      projectUrl: "https://github.com/peddy100/Personal_website",
    },
    {
      title: "Continuous Integration",
      description:
        "A Continuous Intergration workflow to implement specified software functions, emphasizing testing techiniques",
      imgUrl: projImg10,
      projectUrl: "https://github.com/peddy100/Test_driven_development",
    },
    {
      title: "Weather Microservice",
      description:
        "A Flask-based weather microservice using OpenWeatherMap API to deliver city-specific weather metrics for a given date.",
      imgUrl: projImg11,
      projectUrl: "https://github.com/peddy100/Weather-Microservice",
    },
    {
      title: "UI/UX Prototype",
      description:
        "A Figma prototype of an application to assist with finding coding resource more efficiently",
      imgUrl: projImg12,
      projectUrl: "https://www.figma.com/proto/eSJkvIHL9LUQHoOXJ7nnY5/Final-Prototype?node-id=82-767&starting-point-node-id=82%3A767&mode=design&t=rXEfH195z81OxHqS-1"
    },
  ];

  const firstHalf = projects.slice(0, 6);
  const secondHalf = projects.slice(6, 12);

  const h2Ref = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    const handleMouseover = (event) => {
      let iterations = 0;
      const interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
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
        iterations += 1 / 3;
      }, 30);
    };

    const h2Element = h2Ref.current;
    if (h2Element) {
      h2Element.addEventListener("mouseover", handleMouseover);
    }

    return () => {
      if (h2Element) {
        h2Element.removeEventListener("mouseover", handleMouseover);
      }
    };
  }, []);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <h2 ref={h2Ref} data-value="Projects">
              Projects
            </h2>
            <p>
              Explore a portfolio of my projects where each piece represents a
              unique fusion of innovative problem-solving and technical prowess,
              showcasing my capabilities across a broad spectrum of technologies
              and demonstrating my commitment to pushing the boundaries of
              software engineering.
            </p>
          </Col>
        </Row>
        <Tab.Container defaultActiveKey="first" fill>
          <Row className="tabs">
            <Col xs={12}>
              <Nav
                variant="pills"
                className="justify-content-center"
                defaultActiveKey="first"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {firstHalf.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {secondHalf.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
