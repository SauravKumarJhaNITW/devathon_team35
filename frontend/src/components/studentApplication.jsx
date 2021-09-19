import React from "react";
import * as userService from "../services/userService";
import Form from "./common/form";
import { Link } from "react-router-dom";

class StudentApplication extends React.Component {
  state = {
    data: {},
    application_id: "",
  };

  async componentDidMount() {
    const application_id = this.props.match.params.application_id;
    const { data } = await userService.getApplication(application_id);
    if (data) this.setState({ application_id, data });
  }

  handleInputChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.updateApplication(this.state);
      console.log("updated successfully");
      window.location = "";
    } catch (ex) {
      console.log(ex);
    }
  };

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <div>
          <h2>APPLICATION {data.application_id}</h2>
          <ul>
            <li key={0}><img src={`localhost:3001/api/images/${data.picture}`} alt={`${data.name}`} /></li>
            <li key={1}>Name : {data.name}</li>
            <li key={3}>DOB : {data.birthdate}</li>
            <li key={4}>Email : {data.email}</li>
            <li key={5}>Aadhar Number : {data.aadharNumber}</li>
            <li key={6}>Address : {data.address}</li>
            <li key={7}>Gender : {data.gender}</li>
            <li key={8}>Branch: {data.branch}</li>
            <li key={9}>Specialisation : {data.specialisation}</li>
            <li key={10}>category : {data.category}</li>
            <li key={11}>Pwd : {data.pwd}</li>
            <li key={12}>Student Comments : {data.userComments}</li>
            <li key={13}>
              <label htmlFor={"status"}>
                <p>{"Change Status : "}</p>{' '}
              </label>
                <select
                  id={"status"}
                  name={"status"}
                  onChange={this.handleInputChange}
                  value={this.state.data["status"]}
                  className="custom-select"
                >
                  <option value="accepted">Accepted</option>
                  <option value="rejected">Rejected</option>
                </select>
            </li>
            <li key={13}>
              {" "}
              <label htmlFor={"adminComments"}>
                <p>{"Comments :"}</p>
              </label>
              <input
                type={"text"}
                onChange={this.handleInputChange}
                name={"adminComments"}
                value={this.state.data["adminComments"]}
              />
            </li>
            <li key={14}>
              {" "}
              <label htmlFor={"reg_id"}>
                <p>{"Registration Number    : "}</p>
              </label>
              <input
                type={"text"}
                onChange={this.handleInputChange}
                name={"reg_id"}
                value={this.state.data["reg_id"]}
              />
            </li>
            <li key={15}>
              <a  href={`localhost:3001/api/files/${data.documents}`} >
                View Documents
              </a>
            </li>
          </ul>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </React.Fragment>
    );
  }
}

export default StudentApplication;
