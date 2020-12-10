import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import {additionalFeature} from '../actions/additionalFeaturesActions'

const AdditionalFeatures = props => {
  

  return (
    <div className="content">
       <h4>Additional Features</h4>
       
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => {
          
           return <AdditionalFeature key={item.id} feature={item}  additionalFeature={props.additionalFeature}/>
})}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )} 
    </div>
  );
};

const mapStateToProps = (state)=>{

  return {
   additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps,{additionalFeature})(AdditionalFeatures);
