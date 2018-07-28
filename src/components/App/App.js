import React, { Component } from "react";
import { firebaseApp } from "../../firebase";
import "./App.css";

class App extends Component {
  logout() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        This is an app page. User is logged in.
        <button className="btn btn-danger" onClick={() => this.logout()}>
          Logout
        </button>
      </div>
    );
  }
}

export default App;
