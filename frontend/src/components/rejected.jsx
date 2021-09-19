import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../services/userService";

class Rejected extends React.Component {
  state = {
    applications: [],
  };

  async componentDidMount() {
    const { data } = await userService.getApplications("rejected");
    console.log(data);
    this.setState({ applications: data });
  }

  render() {
    return (
      <React.Fragment>
        <div>List of Rejected Applications</div>
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

export default Rejected;
