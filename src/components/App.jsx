import React from 'react';
// import  render  from "@testing-library/react";
import Username from "./Profile/username";
import Avatar from "./Profile/avatar";
import Tag from "./Profile/tag";
import Location from "./Profile/location";
import "./App.css";   
import Stats from './Profile/stats';

// import user from "../user.json";


function App() {

  
  return <div className='block'>
      <Avatar />
    <Username />
    <Tag />
    <Location />
    <Stats/>
  </div>;


  
};

export default App