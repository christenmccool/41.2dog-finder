import React from "react";
import {NavLink} from "react-router-dom";
import "./Nav.css"

const Nav = ({names}) => {
  return (
    <div className="Nav">
      <NavLink to={`/dogs`}>Home</NavLink>
      {names.map(name => <NavLink to={`/dogs/${name}`} key={name}>{name}</NavLink>)}
    </div>
  )
}

export default Nav;