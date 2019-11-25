import { combineReducers } from 'redux';
 
const emptyFile = {
    user_id: '',
    builder_id: this.props.match.params.id,
    type_id: '',
    p_mat: '',
    s_mat: '',
    p_join: '',
    s_join: '',
    fork_id: '',
    brake_id: '',
    dt_id: '',
    wta_id: ''
    
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