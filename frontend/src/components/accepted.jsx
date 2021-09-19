import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../services/userService";

class Accepted extends React.Component {
  state = {
    applications: [],
  };

  async componentDidMount() {
    const { data } = await userService.getApplications("accepted");
    console.log(data);
    this.setState({ applications: data });
  }

  render() {
    return (
      <React.Fragment>
        <div>List of Accepted Applications</div>
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

export default Accepted;
