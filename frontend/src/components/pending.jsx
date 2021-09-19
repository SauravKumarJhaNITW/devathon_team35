import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../services/userService";

class Pending extends React.Component {
  state = {
    applications: [],
  };

  async componentDidMount() {
    const { data } = await userService.getApplications("pending");
    console.log(data);
    this.setState({ applications: data });
  }

  render() {
    return (
      <React.Fragment>
        <div>List of Pending Applications</div>
        <ul>
          {this.state.applications.map((item) => (
            <li key={item._id}>
              <Link to={`/student-application/${item.application_id}`}>
                {item.application_id}
              </Link>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Pending;
