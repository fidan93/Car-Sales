import React from 'react';

import {connect} from 'react-redux'

const AdditionalFeature = props => {
  
  const clickHandler=()=>{
    console.log(props.feature.id)
   props.additionalFeature(props.feature.id)
  }

  const checkChosen=()=>{
    let chosen = false;
     props.features.forEach(item=>{
       if(item.id===props.feature.id){
         chosen=true;
       }
     })
     return chosen;
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button disabled={checkChosen()} className="button" onClick={clickHandler} style={checkChosen()? {background: "red"}:{background:'green'}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );

};

const mapStateToProps=(state)=>{
  return {
      features:state.features
  }
}

export default connect(mapStateToProps)(AdditionalFeature);
