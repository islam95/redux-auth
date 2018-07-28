import React, { Component } from "react";
import { Link } from "react-router";
import { firebaseApp } from "../../firebase";

class Login extends Component {
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

  login() {
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <div className="form col-sm-3">
        <h2>Login</h2>
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
            onClick={() => this.login()}
            className="btn btn-primary"
            type="button"
          >
            Login
          </button>
        </div>
        {this.state.error.message ? (
          <p className="alert alert-danger">{this.state.error.message}</p>
        ) : null}
        <div>
          <Link to={"/register"}>Not Registered?</Link>
        </div>
      </div>
    );
  }
}

export default Login;
