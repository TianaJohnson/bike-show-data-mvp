import { combineReducers } from 'redux';


//buider intake SET reducer, interacts w/ saga
const builderIntakeReducer = (state = [] , action) => {
    console.log('builder intake reducer ');
      switch (action.type) {
        case 'SET_BUILDER':
        console.log('action.paylod:', action.payload)
          return action.payload;
      
        default:
        console.log('state:', state)
          return state;
      }
    };

    export default combineReducers({
      builderIntakeReducer,
  
  })

export {builderIntakeReducer};