import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: {
      application_id: ''
    },
    errors: {},
  };

  schema = {
    application_id: Joi.string().required().label("Application_ID")
  };

  doSubmit = async () => {

    // change to fetch application status


    // try {
    //   await login(this.state.data);
    //   const { state } = this.props.location;
    //   window.location = state ? state.from.pathname : "/";
    // } catch (ex) {
    //   if (
    //     ex.response &&
    //     (ex.response.status === 400 || ex.response.status === 404)
    //   ) {
    //     const errors = { ...this.state.errors };
    //     errors.username = ex.response.data;
    //     this.setState({ errors });
    //   }
    // }
  };

  render() {
    return (
      <div
        className="text-center mx-auto"
        style={{
          marginTop: "10vh",
          padding: "2%",
          width: "80%",
          minWidth: "200px",
          backgroundColor: "lightgray",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <h2>Check Application Status</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("Application_ID", "Application Id")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
