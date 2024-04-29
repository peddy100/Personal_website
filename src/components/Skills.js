import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import python from "../assets/img/python.png";
import react from "../assets/img/react.png";
import nodejs from "../assets/img/nodejs.png";
import sql from "../assets/img/sql.png";
import html from "../assets/img/html.png";
import mongodb from "../assets/img/mongodb.png";
import rest from "../assets/img/Rest.png"
import c from "../assets/img/c++.png"
import kotlin from "../assets/img/kotlin-logo.png"
import unity from "../assets/img/Unity.png"
import figma from "../assets/img/figma.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

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
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2 ref={h2Ref} data-value="Skills">Skills</h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={python} alt="Python" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="React" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={sql} alt="SQL" />
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={nodejs} alt="Node.js" />
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                    <img src={mongodb} alt="MongoDB" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="Web Development" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={rest} alt="REST Api" />
                                    <h5>REST API</h5>
                                </div>
                                <div className="item">
                                    <img src={c} alt="c++" />
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <img src={kotlin} alt="kotlin" />
                                    <h5>Kotlin</h5>
                                </div>
                                <div className="item">
                                    <img src={unity} alt="unity" />
                                    <h5>Unity</h5>
                                </div>
                                <div className="item">
                                    <img src={figma} alt="figma" />
                                    <h5>Figma</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}