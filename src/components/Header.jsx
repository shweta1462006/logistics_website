import React from "react";
import { NavLink } from "react-router-dom";
import"./css/Header.css"



export default function Header({
  first = "Home",
  second = "Blog",
  third = "Services",
  fourth,
}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar23">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            logistic's
          </a>
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
                <NavLink className="nav-link active" aria-current="page" to="/">
                  {first}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  {second}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/features">
                  {third}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  {fourth}
                </NavLink>
              </li>
            </ul>
            <form className="d-flex " role="search">
              <button className="btn btn-outline-danger" type="submit">
                Contact Us
              </button>
               <button className="btn btn-outline-danger mx-3" type="submit">
                Customer login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
