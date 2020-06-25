import React from "react"
import { animated } from "react-spring"
import { NavLink } from "react-router-dom";

import "./nav.scss"

const Nav = ({ style, toggleNavOpen }) => (
  <animated.nav style={style} className="nav-main">
    <div className="nav-content">
      <div className="nav-content-container">
        <h5>matt gallo</h5>
        <ul>
          <li>
            <NavLink to="/" activeClassName="nav-active" className="new-nav-link mg--delta" onClick={() => toggleNavOpen()}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-me" activeClassName="nav-active" className="new-nav-link mg--delta" onClick={() => toggleNavOpen()}>
              about me
            </NavLink>
          </li>
        </ul>
        <span aria-label="Hand wave" role="img" className="wave">👋</span>
      </div>
      <button className="close-nav-button"
        onClick={() => toggleNavOpen()}
      >
          <div className="navigation-line" />
          <div className="navigation-line" />
      </button>
    </div>
  </animated.nav>
)

export default Nav