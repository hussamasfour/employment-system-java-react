import { ThumbUpSharp } from "@material-ui/icons";
import React from "react";
import { connect } from "react-redux";
import { fetchEmployeeById } from "../../redux/actions";
import EmployeeForm from "./EmployeeForm";

class EmployeeEdit extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchEmployeeById(id);
  }
  render() {
    return <EmployeeForm editMode employee={this.props.emp} />;
  }
}
const mapStateToProps = ({ employee }) => {
  return {
    emp: employee.emp,
  };
};
export default connect(mapStateToProps, { fetchEmployeeById })(EmployeeEdit);
