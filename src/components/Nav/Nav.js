import React from "react";

const Nav = props => (
  <nav className="navbar navbar-expand-lg" id="nav">
    <a className="navbar-brand" href="/">
      Dragon Ball Clicky Game!
    </a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">{props.children}</ul>
    </div>
  </nav>
);

export default Nav;
