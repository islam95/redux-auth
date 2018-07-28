import React, { Component } from "react";
import { Link } from 'react-router'
import { firebaseApp } from "../../firebase";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  }

  register() {
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <div className="form col-sm-3">
        <h2>Register</h2>
        <div className="form-group">
          <input
            onChange={e => this.setState({ email: e.target.value })}
            className="form-control"
            style={{ marginBottom: "10px" }}
            type="text"
            placeholder="email"
          />
          <input
            onChange={e => this.setState({ password: e.target.value })}
            className="form-control"
            style={{ marginBottom: "10px" }}
            type="password"
            placeholder="password"
          />
          <button
            onClick={() => this.register()}
            className="btn btn-primary"
            type="button"
          >
            Register
          </button>
        </div>
        {this.state.error.message ? (
          <p className="alert alert-danger">{this.state.error.message}</p>
        ) : null}
        <div><Link to={"/login"}>Already a user? Login instead</Link></div>
      </div>
    );
  }
}

export default Register;
