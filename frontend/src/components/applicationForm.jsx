import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import { getCurrentUser } from "../services/authService";
import { Redirect } from "react-router-dom";

class ApplicationForm extends Form {
  state = {
    stage: 1,
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
    docFile: null,
    picture: null,
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
      console.log("Submitting");
      const fileUpload = await userService.uploadFile(this.state.docFile);
      const imageUpload = await userService.uploadImage(this.state.picture);
      console.log(fileUpload);
      console.log(imageUpload);
      // this.setState({document: fileUpload., picture: imageUpload.name});
      // await userService.register(this.state.data);
      console.log("SUCCESSFULLY DONE !!");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.application_id = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  changeState = () => {
    this.setState({ stage: this.state.stage + 1 });
  };

  handleFiles = (e) => {
    if(e.name==="documents"){
      this.setState({ docFile: e.files[0] });
    }
    if(e.name==="picture"){
      this.setState({ picture: e.files[0] });
    }
  };

  handleFileSubmit = (e) => {
    e.preventDefault();
    this.doSubmit();
  };


  render() {
    if(this.state.stage===1)
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
          {this.renderInput("birthdate", "birthdate", "date")}
          {this.renderInput("aadharNumber", "aadharNumber", "number")}
          {this.renderInput("address", "address")}
          {this.renderInput("gender", "gender")}
          {this.renderInput("specialisation", "specialisation")}
          {this.renderInput("category", "category")}
          {this.renderInput("pwd", "pwd")}
          {this.renderInput("userComments", "userComments")}
          <button onClick={this.changeState} className="btn btn-primary my-3">
            Move to next page
          </button>
          <br />
        </form>
      </div>
    );
    else{
      return(
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
        <form onSubmit={this.handleFileSubmit} onChange={this.handleFiles}>
        <div className="form-group">
          <label htmlFor="documents">
            <p>All Documents</p>
          </label>
          <input
            type="file"
            name="docs"
            id="docs"
            className="form-control text-center"
          />
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="picture">
            <p>Passport size Picture</p>
          </label>
          <input
            type="file"
            name="pic"
            id="pic"
            className="form-control text-center"
          />
          <br />
        </div>
        <button  onClick={this.changeState} className="btn btn-primary my-3"></button>
        <button  type="submit" className="btn btn-primary my-3">Submit</button>
        {this.renderButton("Submit","Submit")}
        </form>
      </div>
      )
    }
  }
}

export default ApplicationForm;
