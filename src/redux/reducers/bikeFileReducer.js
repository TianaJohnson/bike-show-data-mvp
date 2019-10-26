import { combineReducers } from 'redux';
 
const emptyFile = {
    user_id: '',
    builder_id: '',
    frame_info_id: '',
    wta_file_id: '',
    gs_id: '',
    bike_img: ''
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
fileReducer,

})