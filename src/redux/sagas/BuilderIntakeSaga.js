import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

//post saga = send info to server
//Create
function* addBuiler(action) {
    try { 
      yield axios.post('/api/intake', action.payload);
      yield alert('builder added.')
      yield put({ type: 'FETCH_BUILDER' });
      console.log("in add builder saga...");
    } catch (error) {
      console.log('Error with add builder saga:', error);
    }
  }

    //fetch saga = works with builderIntakeReducer
  //read
  function* fetchBuilder(action) {
    try{
    const responseFromServer = yield axios.get('/api/intake');
    yield put({ type: 'SET_BUILDER', payload: responseFromServer.data});
    console.log('response from server is:',responseFromServer.data)
  } catch (error) {
    console.log('Unabale to fetch builder from server', error);
    alert('Unabale to fetch builder from server', error);
  }
}

function* builderIntakeSaga() {
    yield takeLatest('ADD_BUILDER', addBuiler);
    yield takeLatest('FETCH_BUILDER', fetchBuilder);
}

  export default builderIntakeSaga;