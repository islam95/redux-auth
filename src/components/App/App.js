import React, { Component } from "react";
import { connect } from "react-redux";
import { firebaseApp } from "../../firebase";
import "./App.css";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";
import CompleteTaskList from "../TaskList/CompleteTaskList";

class App extends Component {
  logout() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        <h3>Add tasks</h3>
        <AddTask />
        <hr />
        <h4>Tasks list</h4>
        <TaskList />
        <hr />
        <h4>Complete Tasks</h4>
        <CompleteTaskList />
        <hr />
        <button className="btn btn-danger" onClick={() => this.logout()}>
          Logout
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  null
)(App);
