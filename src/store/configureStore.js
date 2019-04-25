import { Platform } from 'react-native';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/es/storage';
import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore'
import RNFirebase from 'react-native-firebase';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducers from '../reducers';

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

let composeEnhancers = compose;

const config = {
	key: 'root',
	storage,
	transforms: [immutableTransform()],
	blacklist: ['nav'],
	debug: true
}

const middleware = [];

if (__DEV__) {
  middleware.push(createLogger());
}

const persistedReducer = persistReducer(config, rootReducers);
const enhancer = composeEnhancers(
	reduxFirestore(RNFirebase.app()),
	reactReduxFirebase(RNFirebase.app(), rrfConfig),
	applyMiddleware(thunk)
);

const persistConfig = { enhancer };
const store = createStore(persistedReducer, undefined, composeWithDevTools(enhancer));
const persistor = persistStore(store, persistConfig, () => {
	// console.log('test', store.getState());
})

const configureStore = () => {
	return { persistor, store }
}

export default configureStore;

