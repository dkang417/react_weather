import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    // console.log('Action received', action); 
    switch (action.type) {
        case FETCH_WEATHER:
            // makes sure we dont mutate the array and create a new array    
            return [ action.payload.data, ...state ];    
    }
    return state;
}
