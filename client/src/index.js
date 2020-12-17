import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';

// import AuthProvider from './Context/AuthContext';

//wrap app component with Authprovider and authenticated states
ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<AuthProvider><App /></AuthProvider>, document.getElementById('root'));
// registerServiceWorker();