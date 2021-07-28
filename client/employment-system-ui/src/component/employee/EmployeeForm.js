import { MenuItem } from "material-ui";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { reduxForm, Field } from "redux-form";
import { addEmployee, updateEmployee } from "../../redux/actions";
import validateEmail from "../../utils/validateEmail";
import CustomButton from "../customButton/CustomButton";
import InputField from "../input-field/InputField";
import SelectFields from "../input-field/SelectField";

const EmployeeForm = ({
  handleSubmit,
  addEmployee,
  updateEmployee,
  history,
  editMode,
  employee,
}) => {
  const title = editMode ? "Edit post" : "Add new Employee";
  const buttonText = editMode ? "Edit" : "Add";
  const emp = editMode ? employee : null;
  const onSubmit = (values) => {
    console.log(values);
    if (editMode) {
      updateEmployee(values, history);
    } else {
      addEmployee(values, history);
    }
  };
  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="row">
        <Field
          name="id"
          type="text"
          cvalue={emp ? emp.id : ""}
          label="id"
          component={InputField}
        />
        <Field
          name="firstName"
          type="text"
          cvalue={employee ? employee.firstName : ""}
          label="First Name"
          component={InputField}
        />
        <Field
          name="lastName"
          type="text"
          cvalue={employee ? employee.lastName : ""}
          label="Last Name"
          component={InputField}
        />
        <Field name="dob" type="date" label="DOB" component={InputField} />
        <Field
          name="salary"
          type="number"
          cvalue={employee ? employee.salary : ""}
          label="Salary"
          component={InputField}
        />

        <Field
          name="email"
          type="text"
          cvalue={employee ? employee.email : ""}
          label="Email"
          component={InputField}
        />

        <Field
          className="form-select "
          disabled
          name="gender"
          label="Gender"
          hidden={editMode ? true : false}
          cvalue={employee ? employee.gender : ""}
          component={SelectFields}
          id="gender"
        >
          <MenuItem defaultValue primaryText="Select" />
          <MenuItem value="male" primaryText="male" />
          <MenuItem value="Female" primaryText="Female" />
        </Field>

        <CustomButton type="submit">{buttonText}</CustomButton>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "First name is requird";
  }
  if (!values.lastName) {
    errors.lastName = "Last name is requird";
  }
  if (new Date(values.dob) > new Date("2000-01-01")) {
    errors.dob = "Sorry Employee must be 21 or older";
  }

  errors.email = validateEmail(values.email || "");
  return errors;
};
export default reduxForm({
  form: "newEmployee",
  validate,
})(connect(null, { addEmployee, updateEmployee })(withRouter(EmployeeForm)));
