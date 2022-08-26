import { connect } from "react-redux";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { login } from "../actions/auth";
import PropTypes from "prop-types";

const Login = ({ login, isAuthenticated }) => {
  const [email, setEmail] = React.useState("jazzelmehmood4@gmail.com");
  const [password, setPassword] = React.useState("Mpower1234");

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="row" style={{ height: "100vh", overflow: "none" }}>
      <div
        className="col-sm-12 col-lg-6 shadow"
        style={{ overflow: "none" }}
      ></div>
      <div
        className="col-sm-12 col-lg-6"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>Login</h1>
        <br />
        <form
          className="form"
          onSubmit={handleSubmit}
          style={{ width: "50%", overflow: "hidden" }}
        >
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="email"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              **
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-dark w-100">
              Login
            </button>
            <div className="mt-2">
              <Link className="text-dark" to="/register">
                New here? Register here.
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
