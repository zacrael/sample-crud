import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
// Reducers
import notifyReducer from "./reducers/notifyReducer";
import settingsReducer from "./reducers/settingsReducer";
import loginReducer from "./reducers/loginReducer";

const firebaseConfig = {
  //api key
  apiKey: "AIzaSyBaDhgT0XVcY_JvfQCdPYdaD9RXfeinZvs",
    authDomain: "react-portf-e16fc.firebaseapp.com",
    databaseURL: "https://react-portf-e16fc.firebaseio.com",
    projectId: "react-portf-e16fc",
    storageBucket: "react-portf-e16fc.appspot.com",
    messagingSenderId: "352132388272",
    appId: "1:352132388272:web:cee26ba2f974df4862b275",
    measurementId: "G-F2K8TL6K63"
};
// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingsReducer,
  auth: loginReducer
});

// Check for settings in localStorage
if (localStorage.getItem("settings") == null) {
  // Default settings
  const defaultSettings = {
    disableBalanceOnEdit: false,
    enableBalanceOnAdd: false,
    allowRegisterOnAdd: true
  };

  // Set to localStorage
  localStorage.setItem("settings", JSON.stringify(defaultSettings));
}

// Create initial state
const initialState = { settings: JSON.parse(localStorage.getItem("settings")) };

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
