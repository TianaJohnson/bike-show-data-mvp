import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* addFile(action) {
    console.log('project post saga');
    try {
        yield axios.put(`/api/file/${action.payload.id}`, action.payload);
        // yield alert('Project added.');
        //V may need to commented out again V//
        yield put({ type: 'FETCH_PROJECT', payload: action.payload});
    }catch (error) {
        console.log('Error in add bike file saga:', error);
    }
}
function* fetchFile(action) {
    console.log('get bike file server fetchFile');
    console.log('action:')
    try{
    const responseFromServer = yield axios.get(`/api/file/${action.payload.id}`);
    yield put({ type: 'SET_FILE', payload: responseFromServer.data});
    console.log('response from bike file saga server is:',responseFromServer.data);
  } catch (error) {
    console.log('Unabale to fetch bike file from server', error);
    alert('Unabale to fetch bike file from server', error);
  }
}


function* projectSaga() {
    yield takeLatest('ADD_FILE', addFile);
    yield takeLatest('FETCH_FILE', fetchFile)
}