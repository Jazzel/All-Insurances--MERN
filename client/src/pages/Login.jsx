import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/dashboard");
  };
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

export default Login;
