import React, { Component } from "react";
import { connect } from "react-redux";
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

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, null)(App);
