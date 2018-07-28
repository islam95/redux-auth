import React, { Component } from "react";
import { connect } from "react-redux";
import { completeTaskRef, taskRef } from "../../firebase";

class TaskItem extends Component {
  completeTask() {
    const { email } = this.props.user;
    const { title, serverKey } = this.props.task;
    taskRef.child(serverKey).remove();
    completeTaskRef.push({ email, title });
  }

  render() {
    const { email, title } = this.props.task;
    return (
      <div style={{ margin: "5px" }}>
        <strong>{title}</strong>
        <span style={{ marginRight: "10px" }}>
          {" "}
          submitted by <em>{email}</em>
        </span>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => this.completeTask()}
        >
          Complete
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return { user };
};

export default connect(
  mapStateToProps,
  null
)(TaskItem);
