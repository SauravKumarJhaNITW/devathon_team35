import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import { getCurrentUser } from "../services/authService";
import { Redirect } from "react-router-dom";

class ApplicationForm extends Form {
  state = {
    data: {
      name: "",
      application_id: "",
      email: "",
      birthdate: "",
      aadharNumber: "",
      address: "",
      gender: "",
      specialisation: "",
      category: "",
      pwd: "",
      documents: "",
      picture: "",
      userComments: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    application_id: Joi.string().required().label("Application Id"),
    email: Joi.string().required().label("Email"),
    birthdate: Joi.string().required().label("birthdate"),
    aadharNumber: Joi.string().required().label("aadharNumber"),
    address: Joi.string().required().label("address"),
    gender: Joi.string().required().label("gender"),
    specialisation: Joi.string().required().label("specialisation"),
    category: Joi.string().required().label("category"),
    pwd: Joi.string().required().label("pwd"),
    documents: Joi.string().required().label("documents"),
    picture: Joi.string().required().label("picture"),
    userComments: Joi.string().required().label("userComments"),
  };

  doSubmit = async () => {
    try {
      await userService.register(this.state.data);
      console.log("SUCCESSFULLY DONE !!");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.application_id = ex.response.data;
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
        <h2>MTech Registration</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("application_id", "Application Id")}
          {this.renderInput("email", "Email")}
          {this.renderInput("name", "name")}
          {this.renderInput("birthdate", "birthdate")}
          {this.renderInput("aadharNumber", "aadharNumber")}
          {this.renderInput("address", "address")}
          {this.renderInput("gender", "gender")}
          {this.renderInput("specialisation", "specialisation")}
          {this.renderInput("category", "category")}
          {this.renderInput("pwd", "pwd")}
          {this.renderInput("documents", "documents")}
          {this.renderInput("picture", "picture")}
          {this.renderInput("userComments", "userComments")}
          {this.renderButton("Apply")}
        </form>
      </div>
    );
  }
}

export default ApplicationForm;
