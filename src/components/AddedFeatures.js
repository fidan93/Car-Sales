import React from 'react';
import {connect} from "react-redux";
import AddedFeature from './AddedFeature';
import{clearFeature} from '../actions/additionalFeaturesActions';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length  ? (
      
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} clearFeature={props.clearFeature}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) =>{
  console.log(state)
  return {
   features: state.features,
   additionalFeatures: state.additionalFeatures
  }
}
export default connect(mapStateToProps,{clearFeature})(AddedFeatures);
