import React from "react";

const About = (props) => {
  return (
    <div className="container my-5" style={props.mode}>
      <h1 className="my-5 text-center">About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item border" >
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={props.mode}
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={props.mode}>
              On text-utils you can anylize your your text you can Convert text
              to uppercase or lowercase or listen the typed text or copied text
              you can also see the number of words and characters plus how much
              time to read it and also see preview...
            </div>
          </div>
        </div>
        <div className="accordion-item border">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={props.mode}
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={props.mode}>
              our text-utils is free to use you can access it from anywhere
              anytime and use it for absolutely free
            </div>
          </div>
        </div>
        <div className="accordion-item border">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={props.mode}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={props.mode}>
              our text-utils is browser compatible it can works on any current
              browser and also reposive so you can access on any device...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
