import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

export default function Navbar(props) {
  //set props
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.navbar} bg-${props.navbar}`}>
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            {props.title}
            {/* we can set this during calling the Navbar */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onClick={props.onClk}
                id="flexSwitchCheckDefault"
              />
              <label className={`form-check-label text-${props.navbar === 'dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">
                {props.modebtn}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

//Thats how we can also set propsTypes so we have to pass that type of data only for them
Navbar.protoType = {
  title: PropTypes.string.isRequired, //we can make some prps isrequired so if we dont pass them or set defult values for them they give error
  about: PropTypes.string,
};

//we can also mention default props also so if we forget to pass them during caling they can take default values
Navbar.defaultProps = {
  title: "Set title here",
  about: "write about here",
};
