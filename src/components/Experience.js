import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Reveal } from "./Reveal.tsx";

export const Experience = () => {
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
        <section className="experience" id="experience">
          <Container>
            <Col xs={12}>
                <h2 ref={h2Ref} data-value="Experience">Experience</h2>
                <div className="experiences">
                    <Reveal>
                        <Row className="justify-content-between align-items-center">
                            <Col xs={8}>
                                <h3> Broadridge Advisor Solutions </h3>
                            </Col>
                            <Col xs={4}>
                                <h3> Jan 2015 - Present </h3>
                            </Col>
                        </Row>
                    </Reveal>
                    <Reveal>
                        <h4>Senior SaaS Sales Executive – Team Lead</h4>
                    </Reveal>
                    <Reveal>
                        <ul>
                            <li>Opened entry-point into LPL Financial; became the most profitable retail sector at $2 million per year.</li>
                            <li>First in digital sales for 4 out of the last 5 years; consistently set records and exceeded quota by 150%.</li>
                            <li>Managed and lead a 5-person inside sales team to exceed goal; team has become first in revenue.</li>
                            <li>Consulted through complex sales cycle from outreach to pricing proposals and technical onboarding.</li>
                            <li>Presented omni-channel communication solutions at RIA and broker dealer trade shows. </li>
                            <li>Achieved President&apos;s Club for 2 consecutive years.</li>
                        </ul>
                    </Reveal>
                    <Reveal>
                        <Row className="justify-content-between align-items-center">
                            <Col xs={8}>
                                <h3> Covance </h3>
                            </Col>
                            <Col xs={4}>
                                <h3> Sep 2013 – Oct 2014 </h3>
                            </Col>
                        </Row>
                    </Reveal>
                    <Reveal>
                        <h4>Account Specialist</h4>                       
                    </Reveal>
                    <Reveal>
                        <ul>
                            <li>Provided top-tier customer success by keeping informed of available products to answer questions.</li>
                            <li>Qualified clients for pharmaceutical programs by negotiating with insurance companies and agencies.</li>
                            <li>Managed existing accounts while doing high volumes of outbound and inbound phone calls.</li>
                            <li>Maintained individual and government contracts by creating detailed notes in Salesforce CRM.</li>
                        </ul>
                    </Reveal>
                    <Reveal>
                        <Row className="justify-content-between align-items-center">
                            <Col xs={8}>
                                <h3> Informa </h3>
                            </Col>
                            <Col xs={4}>
                                <h3>Apr 2012 – Jun 2013</h3>
                            </Col>
                        </Row>
                    </Reveal>
                    <Reveal>
                        <h4>Research Assistant</h4>
                    </Reveal>
                    <Reveal>
                        <ul>
                            <li>Contacted financial services institutions and collected data depending on customer needs.</li>
                            <li>Consistently met deadlines and exceeded individual achievement of key performance indicators (KPIs).</li>
                            <li>Analyzed information pertaining to wealth management technology applications and fees.</li>
                            <li>Utilized excellent written and verbal communication skills to obtain data from banks. </li>
                        </ul>
                    </Reveal>
                    <Reveal>
                        <Row className="justify-content-between align-items-center">
                            <Col xs={8}>
                                <h3>Black Orchid</h3>
                            </Col>
                            <Col xs={4}>
                                <h3>Dec 2009 – Apr 2012</h3>
                            </Col>
                        </Row>
                    </Reveal>
                    <Reveal>
                        <h4>Sales Manager</h4>
                    </Reveal>
                    <Reveal>
                        <ul>
                            <li>Hired, trained, and mentored sales team to close new business in a fast-paced environment.</li>
                            <li>Implemented competitive bonus programs to motivate and retain a driven sales team.</li>
                            <li>Implemented social media strategies and omni-channel customer communication of value proposition.</li>
                            <li>Managed the logistics of wholesale accounts by coordinating meeting and shaping results.</li>
                        </ul>
                    </Reveal>
                </div>
            </Col>
          </Container>
        </section>
      );
}