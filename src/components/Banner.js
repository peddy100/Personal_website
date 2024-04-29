import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import resume from "../assets/docs/Pedram_Jarahzadeh_Resume.pdf"

export const Banner = () => {
    const [backgroundPosition, setBackgroundPosition] = useState(0);
    
    useEffect (() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setBackgroundPosition(-scrollPosition * 0.3);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const bannerStyle = {
        backgroundPositionY: `S{backgroundPosition}px`,
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">&gt; Hello World!</span>
                        <h1 className="wordCarousel">
                            <span>I am Pedram Jarahzadeh</span>
                            <div>
                                <ul className="flip5">
                                    <li>Software Engineer</li>
                                    <li>Web Developer</li>
                                    <li>UX/UI Engineer</li>
                                    <li>Sr. Account Executive</li>
                                    <li>Artist</li>
                                </ul>
                            </div>
                        </h1>
                        <a href="#connect">
                            <button>Let's Connect</button>
                        </a>
                        <a href={resume} download="Pedram Jarahzadeh Resume" target="_blank" rel="noopener noreferrer">
                            <button>Download Resume</button>
                        </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}