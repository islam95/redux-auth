import React, { Component } from "react";
import { connect } from "react-redux";
import { completeTaskRef } from "../../firebase";
import { setCompletedTasks } from "../../redux/actions";

class CompleteTaskList extends Component {
  componentDidMount() {
    completeTaskRef.on("value", snap => {
      let completeTasks = [];
      snap.forEach(task => {
        const { email, title } = task.val();
        completeTasks.push({ email, title });
      });
      this.props.setCompletedTasks(completeTasks);
    });
  }

  clearCompleted() {
    completeTaskRef.set([]);
  }

  render() {
    return (
      <div>
        {this.props.completeTasks.map((task, i) => {
          const { email, title } = task;
          return (
            <div key={i} style={{margin: "5px"}}>
              <strong>{title}</strong> completed by <em>{email}</em>
            </div>
          );
        })}
        <button
          className="btn btn-primary"
          onClick={() => this.clearCompleted()}
        >
          Clear all
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { completeTasks } = state;
  return { completeTasks };
};

export default connect(
  mapStateToProps,
  { setCompletedTasks }
)(CompleteTaskList);
