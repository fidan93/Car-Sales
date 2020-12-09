
export const CHOOSE_FEATURE = "CHOOSE_FEATURE";
export const CLEAR_FEATURE = "CLEAR_FEATURE";


export const additionalFeature=(id)=>{
    return ({type:CHOOSE_FEATURE,payload:id})
}
export const clearFeature = (id)=>{
    return ({type:CLEAR_FEATURE,payload:id})
}

