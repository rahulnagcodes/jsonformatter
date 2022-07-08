import React, { Component, useState } from "react";
import Switch from "react-switch";

const MySwitch=({handleChange, checked})=> {
    return (
      <div style={{float:'right', textAlign:'center'}}>
      <label>
        {/* <span>LIGHT</span> */}
        <Switch onChange={handleChange} checked={checked} />
        {/* <span>DARK</span> */}
      </label>
      </div>
    );
  
}

export default MySwitch