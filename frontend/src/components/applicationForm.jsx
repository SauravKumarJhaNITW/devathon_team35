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
      specialization: "",
      category: "",
      pwd: "",
      documents: "none",
      picture: "none",
      userComments: "",
    },
    branches: [],
    docFile: null,
    picture: null,
    errors: {},
  };

  async componentDidMount() {
    const { data } = await userService.getBranches();
    console.log(data);
    this.setState({ branches: data });
    console.log(this.state.branches);
  }

  schema = {
    name: Joi.string().required().label("Name"),
    application_id: Joi.string().required().label("Application Id"),
    email: Joi.string().required().label("Email"),
    birthdate: Joi.string().required().label("birthdate"),
    aadharNumber: Joi.string().required().label("aadharNumber"),
    address: Joi.string().required().label("address"),
    gender: Joi.string().required().label("gender"),
    branch: Joi.string().required().label("branch"),
    specialization: Joi.string().required().label("specialization"),
    category: Joi.string().required().label("category"),
    pwd: Joi.string().required().label("pwd"),
    documents: Joi.string().required().label("documents"),
    picture: Joi.string().required().label("picture"),
    userComments: Joi.string().required().label("userComments"),
  };

  doSubmit = async () => {
    try {
      console.log("Submitting");
      console.log(this.state.docFile);
      console.log(this.state.picture);
      const fileUpload = await userService.uploadFile(this.state.docFile);
      const imageUpload = await userService.uploadImage(this.state.picture);
      console.log(fileUpload);
      console.log(imageUpload);
      const data = { ...this.state.data };
      data['documents'] = this.state.docFile.name;
      data['picture'] = this.state.picture.name;
      this.setState({data});
      console.log(this.state.data);
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

  getSpecializations = (async) => {
    if (this.state.branches && this.state.data.branch) {
      const item = this.state.branches.find(
        (item) => item.name === this.state.data.branch
      );
      return item.specializations;
    } else return null;
  };


  changeState = (e) => {
    // e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    console.log(this.state.errors);
    if(errors) return;
    console.log("MOVE");
    this.setState({ stage: this.state.stage + 1 });
    e.preventDefault();
  };

  handleFiles = (e) => {
    // console.log(e);
    if(e.target.name==="docs"){
      console.log("File selected");
      this.setState({ docFile: e.target.files[0] });
    }
    if(e.target.name==="pic"){
      console.log("IMAGE selected");
      this.setState({ picture: e.target.files[0] });
    }
  };

  handleFileSubmit = (e) => {
    e.preventDefault();
    document.querySelector('.doccheck1').innerHTML="";
    document.querySelector('.doccheck2').innerHTML="";

    if(!this.state.docFile){
      document.querySelector('.doccheck1').innerHTML="Please upload documents";
      return;
    }
    else if(!this.state.picture){
      document.querySelector('.doccheck2').innerHTML="Please upload profile image";
      return;
    }
    // this.doSubmit();
    const data = { ...this.state.data };
    data['documents'] = this.state.docFile.name;
    data['picture'] = this.state.picture.name;
    this.setState({data});
    this.setState({ stage: 3 });
  };

  handlePreviewBack = (e) => {
    e.preventDefault();
    this.setState({ stage: 2 });
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
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("name", "name")}
          {this.renderInput("birthdate", "birthdate","date")}
          {this.renderInput("aadharNumber", "aadharNumber","number")}
          {this.renderInput("address", "address")}
          {this.renderSelect("gender", "gender", ["Male","Female","Others"])}
          {this.renderSelect("branch", "branch", this.state.branches)}
          {this.renderSelect(
            "specialization",
            "specialization",
            this.getSpecializations()
          )}
          {this.renderSelect("category", "category", ["General","SC/ST","OBC"])}
          {this.renderSelect("pwd", "pwd", ["Yes","No"])}
          {this.renderInput("userComments", "userComments")}

          <button disable={this.validate()} onClick={this.changeState} className="btn btn-primary my-3">
            Move to next page
          </button>
        </form>
      </div>
    );
    else if(this.state.stage===2){
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
            accept=".pdf" 
            className="form-control text-center"
          />
          <div className="doccheck1" style={{color: 'red'}}></div>
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
            accept=".jpg,.jpg,.png"
            className="form-control text-center"
          />
          <div className="doccheck2" style={{color: 'red'}}></div>
          <br />
        </div>
        <button onClick={()=> this.setState({stage:1})} className="btn btn-primary my-3">Previous</button>
        {' '}
        <button  type="submit" className="btn btn-primary my-3">Preview</button>
        </form>
      </div>
      )
    }
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
            <div className="container">
            {
              Object.keys(this.state.data).map((key, i) => {
                return(
                  <div key={i}>
                    <h3>{key}: {this.state.data[key]}</h3>
                    <br />
                  </div>
                );
              })
            }
            </div>
        </div>
      )
    }
  }
}

export default ApplicationForm;