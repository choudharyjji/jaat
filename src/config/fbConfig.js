import firebase from 'react-native-firebase';

import { createFirestoreInstance } from "redux-firestore";
import store from '../redux/store/store';

export const db = firebase;
export const fs = firebase.firestore();
export const dbstorage = firebase.storage();
export const fcm = firebase.messaging();
export const fcmnotification = firebase.notifications();

const rrfConfig = {
    userProfile: 'users',
    attachAuthIsReady: true,
    useFirestoreForProfile: true
}

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
}