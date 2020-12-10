import{CHOOSE_FEATURE,CLEAR_FEATURE,TOTAL_PRICE} from '../actions/additionalFeaturesActions';


export const initialState = {
       features: []
      ,
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
      ],
      additionalPrice: 0
};

export const additionalReducer = (state = initialState,action)=>{
    
    switch (action.type) {
        case CHOOSE_FEATURE:  
    const chosen = state.additionalFeatures.filter(item=>{ 
       if(item.id === action.payload){
        return item
       } 
    })[0];

      return ({...state,features:[...state.features,chosen],additionalPrice:state.additionalPrice+chosen.price})
     
      case CLEAR_FEATURE:
        const substractItem = state.additionalFeatures.filter(item=>{ 
            if(item.id === action.payload){
             return item
            } 
         })[0]
        const clear = state.features.filter(item=>{
            return item.id!==action.payload
        })
        return ({...state,features:clear,additionalPrice:state.additionalPrice-substractItem.price})

        default:
            return(state);
    }
}