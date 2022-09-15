import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <img src="../assets/img/logo.png" id="logo" alt="logo du club" />
          <a class="navbar-brand" href="#">
            Scoreboard Volley
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Navigation
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <NavLink to="/" class="nav-link active" aria-current="page">
                    Accueil
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/Scoreboard" class="nav-link" >
                    Scoreboard
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="Prise-en-main" class="nav-link" >
                    Prise en main
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/About" class="nav-link" >
                    A propos
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="Contact" class="nav-link" >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
