import React from 'react';

import {connect} from 'react-redux'

const AdditionalFeature = props => {
  
  const clickHandler=()=>{
    console.log(props.feature.id)
   props.additionalFeature(props.feature.id)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={clickHandler}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );

};


export default AdditionalFeature;
