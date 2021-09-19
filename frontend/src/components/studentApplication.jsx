import React from "react";
import * as userService from "../services/userService";
import Form from "./common/form";

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
          <ul>
            <li key={1}>{data.name}</li>
            <li key={2}>{data.application_id}</li>
            <li key={3}>{data.birthdate}</li>
            <li key={4}>{data.email}</li>
            <li key={5}>{data.aadharNumber}</li>
            <li key={6}>{data.address}</li>
            <li key={7}>{data.gender}</li>
            <li key={8}>{data.specialisation}</li>
            <li key={9}>{data.category}</li>
            <li key={10}>{data.pwd}</li>
            <li key={11}>{data.userComments}</li>
            <li key={12}>
              <label htmlFor={"status"}>
                <p>{"status(accepted/rejected/pending)"}</p>
              </label>
              <input
                type={"text"}
                onChange={this.handleInputChange}
                name={"status"}
                value={this.state.data["status"]}
              />
            </li>
            <li key={13}>
              {" "}
              <label htmlFor={"adminComments"}>
                <p>{"Comments               "}</p>
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
                <p>{"Registration Number     "}</p>
              </label>
              <input
                type={"text"}
                onChange={this.handleInputChange}
                name={"reg_id"}
                value={this.state.data["reg_id"]}
              />
            </li>
          </ul>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </React.Fragment>
    );
  }
}

export default StudentApplication;
