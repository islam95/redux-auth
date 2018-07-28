import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import registerServiceWorker from "./registerServiceWorker";
import { Router, Route, browserHistory } from "react-router";
import { firebaseApp } from "./firebase";

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    browserHistory.push("/app");
  } else {
    browserHistory.replace("/login");
  }
});

ReactDOM.render(
  <Router path="/" history={browserHistory}>
    <Route path="/app" component={App} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
