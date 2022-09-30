import React from 'react'
import './Navbar.css';
import { useState } from "react";
import logo from './Images/logo.jfif'
export default function Navbar(props) {
    const [Tab,setTab] = useState(false);
function col(){
  setTab(true);
}
function colBlur(){
  setTab(false)
}
// const icons = ['refresh','width_full','settings'];
const profile_icons = ['apps','account_circle']
  return (
    <div className="Navbar">
      <div className="Menubar">
        <span
          class="material-symbols-outlined"
          onClick={props.toggleActiveState}
        >
          menu
        </span>
      </div>
      <div className="Navbar-heading">
        <h5>Task</h5>
      </div>
        <div className="Nav-logo">
          <img src={logo} alt="Logo"></img>
        </div>
        <div className="Navbar-profile">
          {profile_icons.map((data) => {
            return <span className="material-symbols-outlined">{data}</span>;
          })}
        </div>
    </div>
  );
}