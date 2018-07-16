import React, { Component } from 'react';

function Thing(props)
{
  if(props.toggles.indexOf(props.switch_on) >=0)
    {
      return (<div>TOGGLE ON</div>)
    }
    else
    {
      return (<div>TOGGLE OFF</div>)
    }

}

export default Thing;
