import React from 'react';

const AddedFeature = props => {
  const clear=()=>{
    props.clearFeature(props.feature.id)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={clear}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
