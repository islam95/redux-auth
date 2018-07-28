import React, { Component } from "react";
import { connect } from "react-redux";
import { taskRef } from "../../firebase";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  addTask() {
    const { title } = this.state;
    const { email } = this.props.user;
    taskRef.push({ email, title });
  }

  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"
            placeholder="Add a task"
            className="form-control"
            style={{ marginRight: "5px" }}
            onChange={e => this.setState({ title: e.target.value })}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.addTask()}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state
  return { user }
}

export default connect(mapStateToProps, null)(AddTask);
