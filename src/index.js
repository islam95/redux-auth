import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import App from "./components/App/App";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import registerServiceWorker from "./registerServiceWorker";
import { Router, Route, browserHistory } from "react-router";
import { firebaseApp } from "./firebase";
import reducer from "./redux/reducers";
import { logUser } from "./redux/actions";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    const { email } = user;
    store.dispatch(logUser(email));
    browserHistory.push("/app");
  } else {
    browserHistory.replace("/login");
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
