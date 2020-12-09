import React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {additionalReducer} from './reducers/additionalFeaturesReducer'

const App = (props) => {
  const state = {
    // additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      
    }, 
  };

  const store = createStore(additionalReducer)

  return (
   <Provider store={store}>
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures/>
        {/* <Total car={props.car} additionalPrice={props.additionalPrice} /> */}
      </div>
    </div>
    </Provider>
  );
};

export default App;
