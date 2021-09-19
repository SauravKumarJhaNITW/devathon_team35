import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../services/userService";
import { Table } from 'reactstrap'

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
        <Table dark responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Application_ID</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {this.state.applications.map((item) => (
            <tr key={item._id}>
              <td>*</td>
              <td>{item.application_id}</td>
              <td>{item.name}</td>
              <td>
                <Link to={`/student-application/${item.application_id}`}>
                  View Application
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default Rejected;
