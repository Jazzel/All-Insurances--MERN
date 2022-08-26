import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="row" style={{ height: "100vh", overflow: "none" }}>
      <div className="col-6 shadow" style={{ overflow: "none" }}></div>
      <div
        className="col-6"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>Register</h1>
        <br />
        <form
          className="form"
          onSubmit={handleSubmit}
          style={{ width: "50%", overflow: "hidden" }}
        >
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="email"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              **
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-dark w-100">
              Register
            </button>
            <div className="mt-2">
              <Link className="text-dark" to="/login">
                Already a user? Login here.
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
