import React from 'react';
import { Component } from 'react';
import Navbar from './Navbar';
import { FiSearch } from "react-icons/fi";
import {  BiCart } from "react-icons/bi";


const iconPropertySearch = {
  position:"absolute", 
  background:"green", 
  fontSize:"1.2em",
  padding:".5em",
  margin:"0 .1em 0 0",
  borderRadius:".3em",
  right:".1em",
  top:"50%",
  transform:"translateY(-50%)",
  color:"white"
}

const iconPropertyCart={
  position:"absolute",
  fontSize:"1.5em",
  padding:".4em",
  margin:"-.85em 2em 0 .5em",
  borderRadius: ".3em",
  cursor:"pointer",
  boxShadow:"0 0 13px 5px #ccc",
}

function Header(){
  return (
    <div className="header">
     
     <div className="logo">
     <img src="./images/starbuckslogo.png" className="imgLogo"></img>
     <h1 className="logoText" onClick={console.log('heyyyy')}>Starbucks</h1>
     </div>

     <section className="navBar">
       <Navbar></Navbar>
     </section>

     <section className="right-col">
     
     <div className="search">
     <input  className="search-input" placeholder="search" type="text">
     </input>
     <FiSearch style={iconPropertySearch} ></FiSearch>
     </div>

     <div>
      <BiCart style={iconPropertyCart}></BiCart>
     </div>
     </section>
    </div>
  );
}

export default Header;