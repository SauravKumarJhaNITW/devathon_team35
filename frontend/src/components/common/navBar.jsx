import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/js/src/collapse.js";
import { getCurrentUser } from "../../services/authService";

const NavBar = () => {
  const user = getCurrentUser();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        App
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {!user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login as admin
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/application-form">
                  Apply for MTech Registration
                </NavLink>
              </li>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/accepted">
                  Accepted
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/rejected">
                  Rejected
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pending">
                  Pending
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  Logout
                </NavLink>
              </li>
            </React.Fragment>
          )}
          {/* {user && !user.isAdmin && user.submitted && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/status">
                  Status
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  Logout
                </NavLink>
              </li>
            </React.Fragment>
          )} */}
          {/* {user && !user.isAdmin && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/apply">
                  Apply
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  Logout
                </NavLink>
              </li>
            </React.Fragment>
          )} */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
