import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import counter from './counter';

export default combineReducers({
	firestore: firestoreReducer,
	firebase: firebaseReducer,
	counter
});