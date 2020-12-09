import{CHOOSE_FEATURE} from '../actions/additionalFeaturesActions';

export const initialState = {
       features: []
      ,
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
      ]
};

export const additionalReducer = (state = initialState,action)=>{
    
    switch (action.type) {
        case CHOOSE_FEATURE:
           
    const chosen = state.additionalFeatures.filter(item=>{
        console.log(action.payload)
       if(item.id === action.payload){
        return ({...state,features:[...state.features,item]});
       } 
    })
            return ({...state,features:chosen})
    
        default:
            return(state);
    }
}