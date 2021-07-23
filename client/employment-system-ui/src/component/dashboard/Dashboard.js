import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { fetchEmployees } from "../../redux/actions";
class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }
  render() {
    const { isLoggedIn } = this.props;
    console.log(this.props.employeesList);
    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }
    return <div>Dashboard</div>;
  }
}

const mapStateToProps = ({ auth, employee }) => {
  return {
    isLoggedIn: auth.isLoggedIn,
    employeesList: employee.employees,
  };
};
export default connect(mapStateToProps, { fetchEmployees })(Dashboard);
