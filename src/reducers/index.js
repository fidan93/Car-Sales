import { combineReducers} from 'redux';
import {additionalReducer} from './additionalFeaturesReducer';
import {addedReducer} from './addedReducer'

export const rootReducer = combineReducers({
    additional: additionalReducer,
    added: addedReducer
})