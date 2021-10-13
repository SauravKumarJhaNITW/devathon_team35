import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getStatus } from "../services/userService";

class ApplicationStatus extends Form {
  state = {
    data: {
      application_id: "",
    },
    errors: {},
    success: "",
  };

  schema = {
    application_id: Joi.string().required().label("Application_ID"),
  };

  doSubmit = async () => {
    try {
      const { data } = await getStatus(this.state.data.application_id);
      console.log(data);
      this.setState({ success: data });
    } catch (ex) {
      if (
        ex.response &&
        (ex.response.status === 400 || ex.response.status === 404)
      ) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
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
          {this.renderInput("application_id", "Application Id")}
          {this.renderButton("Check Status")}
          <div>{this.state.success}</div>
        </form>
      </div>
    );
  }
}

export default ApplicationStatus;
