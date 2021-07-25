import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { reduxForm, Field } from "redux-form";
import { addEmployee } from "../../../redux/actions";
import validateEmail from "../../../utils/validateEmail";
import CustomButton from "../../customButton/CustomButton";
import InputField from "../../input-field/InputField";

const EmployeeForm = ({ handleSubmit, addEmployee, history }) => {
  const onSubmit = (values) => {
    addEmployee(values, history);
  };
  return (
    <div>
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="row">
        <Field
          name="firstName"
          type="text"
          label="First Name"
          component={InputField}
        />
        <Field
          name="lastName"
          type="text"
          label="Last Name"
          component={InputField}
        />
        <Field name="dob" type="date" label="DOB" component={InputField} />
        <Field
          name="salary"
          type="number"
          label="Salary"
          component={InputField}
        />

        <Field name="email" type="text" label="Email" component={InputField} />
        <div className="col-md-6">
          <label className="form-label" htmlFor="gender">
            Gender
          </label>
          <Field
            className="form-select "
            name="gender"
            component="select"
            id="gender"
          >
            <option defaultValue>Select</option>
            <option value="male">Male</option>
            <option value="Female">Female</option>
          </Field>
        </div>

        <CustomButton type="submit">addEmployee</CustomButton>
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
})(connect(null, { addEmployee })(withRouter(EmployeeForm)));
