import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/common/navBar";
import ProtectedRoute from "./components/common/protectedRoute";
import ApplicationForm from "./components/applicationForm";
import ApplicationStatus from "./components/applicationStatus";
import LoginForm from "./components/loginForm";
import NotFound from "./components/common/notFound";
import Profile from "./components/profile";
import Home from "./components/home";
import Logout from "./components/logout";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/logout" component={Logout} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/application-form" component={ApplicationForm} />
            <Route path="/application-status" component={ApplicationStatus} />
            <Route path="/" component={Home} />
            <Redirect to="/not-found" />
          </Switch>{" "}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
