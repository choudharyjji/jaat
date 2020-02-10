import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';

const reducers = {
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth: authReducer,
};

export default combineReducers(reducers);