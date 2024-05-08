import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { easeInOut, motion, useAnimation, useInView } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      hearders: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message Sent Successfully'})
    } else {
      setStatus({ success: false, message: 'Something Went Wrong'})
    }
  };

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

  const svgRef = useRef(null);
  const isInView = useInView(svgRef, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const svgVariants = {
    hidden: { rotate: -180 },
    visible: { rotate: 0, transition: { duration: 1 } },
  };

  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, ease: easeInOut },
    },
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.svg
              ref={svgRef}
              width="400px"
              height="400px"
              viewBox="-10 -10 398.632 398.632"
              xmlns="http://www.w3.org/2000/svg"
              variants={svgVariants}
              initial="hidden"
              animate={mainControls}
            >
              <defs>
                <filter id="neon" x="-50%" y="-50%" width="200%" height="200%">
                  <feFlood
                    result="flood"
                    flood-color="#00ff00"
                    flood-opacity="1"
                  ></feFlood>
                  <feComposite
                    in="flood"
                    result="mask"
                    in2="SourceGraphic"
                    operator="in"
                  ></feComposite>
                  <feMorphology
                    in="mask"
                    result="dilated"
                    operator="dilate"
                    radius="2"
                  ></feMorphology>
                  <feGaussianBlur
                    in="dilated"
                    result="blurred"
                    stdDeviation="5"
                  ></feGaussianBlur>
                  <feMerge>
                    <feMergeNode in="blurred"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
                </filter>
              </defs>
              <motion.path
                d="M377.406,160.981c-5.083-48.911-31.093-92.52-73.184-122.854C259.004,5.538,200.457-6.936,147.603,4.807
                                C97.354,15.971,53.256,48.312,26.571,93.491C-0.122,138.731-7.098,192.982,7.436,242.39c7.832,26.66,21.729,51.712,40.15,72.51
                                c18.594,20.972,41.904,37.722,67.472,48.459c23.579,9.888,48.628,14.797,73.653,14.797c34.128-0.001,68.115-9.121,97.949-27.098
                                l-21.092-35.081c-40.578,24.451-90.887,28.029-134.652,9.66c-40.283-16.96-71.759-52.383-84.211-94.761
                                c-11.336-38.595-5.846-81.093,15.125-116.586c20.922-35.467,55.426-60.801,94.622-69.533c41.644-9.225,87.948,0.669,123.857,26.566
                                c32.502,23.394,52.497,56.769,56.363,93.907c2.515,23.979,0.31,42.891-6.526,56.226c-14.487,28.192-35.526,28.36-43.873,27.132
                                c-0.283-0.041-0.476-0.082-0.65-0.117c-2.396-3.709-2.091-17.489-1.974-23.473c0.044-2.332,0.084-4.572,0.084-6.664v-112.06h-31.349
                                c-3.998-3.278-8.225-6.251-12.674-8.921c-17.076-10.159-36.858-15.552-57.255-15.552c-29.078,0-56.408,10.597-76.896,29.824
                                c-32.537,30.543-42.63,80.689-24.551,122.023c8.578,19.62,23.065,35.901,41.876,47.066c17.611,10.434,38.182,15.972,59.47,15.972
                                c24.394,0,46.819-6.735,64.858-19.492c1.915-1.342,3.813-2.79,5.626-4.233c6.431,8.805,15.811,14.4,27.464,16.114
                                c16.149,2.408,32.299-0.259,46.784-7.668c16.453-8.419,29.715-22.311,39.439-41.271C377.209,219.346,380.778,193.46,377.406,160.981
                                z M242.33,224.538c-0.891,1.283-2.229,2.907-2.961,3.803c-0.599,0.778-1.151,1.46-1.643,2.073
                                c-3.868,4.982-8.597,9.48-14.113,13.374c-11.26,7.943-25.152,11.964-41.257,11.964c-28.968,0-53.462-14.75-63.846-38.544
                                c-11.258-25.69-5.071-56.854,15.035-75.692c12.7-11.95,30.538-18.784,48.911-18.784c13.028,0,25.56,3.375,36.268,9.788
                                c6.831,4.072,12.861,9.337,17.9,15.719c0.497,0.613,1.082,1.322,1.724,2.094c0.952,1.135,2.812,3.438,3.981,5.092V224.538z"
                fill="none"
                stroke="#00FF00"
                stroke-width="2"
                filter="url(#neon)"
                variants={pathVariants}
              />
            </motion.svg>
          </Col>
          <Col md={6}>
            <h2 ref={h2Ref} data-value="Initialize Dialogue">
              Initialize Dialogue
            </h2>
            <p><FontAwesomeIcon icon={faPhone} style={{marginRight: '10px'}}/>310-770-1406</p>
            <p><FontAwesomeIcon icon={faEnvelope} style={{marginRight: '10px'}}></FontAwesomeIcon>pedram.jarahzadeh@gmail.com</p>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="eMail"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  ></input>
                </Col>
                <Col>
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                <Col md={12}>
                  {status.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? "danger" : "success"
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
