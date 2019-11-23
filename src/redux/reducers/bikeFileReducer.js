import { combineReducers } from 'redux';
 
const emptyFile = {
   //to be filled out with new peramiters 
};

const bikeFileReducer = (state = emptyFile, action) => {
console.log('bike File reducer');
switch (action.type) {
case 'CLEAR_FILE':
  return emptyFile;
case 'SET_FILE':
if(action.payload && action.payload !== '' && action.payload.project_name) {
  console.log('action.paylod:', action.payload)
  return action.payload;
}else {
  return state;
}

case 'SET_FILE_PROPERTY':
  const propertyToChange = action.payload;
  return {
    ...state,
    // key is 'project_name'
    // value is "Ride the lightning"
    // e.g. state.project_name = "Ride the lightning"
    [propertyToChange.key]: propertyToChange.value
  }
default:
console.log('state:', state)
  return state;
}
};

export default combineReducers({
bikeFileReducer,

})