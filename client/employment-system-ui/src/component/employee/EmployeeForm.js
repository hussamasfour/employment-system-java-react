import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { reduxForm, Field } from "redux-form";
import { updateEmployee } from "../../redux/actions";
import validateEmail from "../../utils/validateEmail";
import CustomButton from "../customButton/CustomButton";
import InputField from "../input-field/InputField";

const EmployeeForm = ({
  handleSubmit,
  editMode,
  employee,
  handleEmpUpdate,
  handleNewEmpSubmit,
}) => {
  const title = editMode ? "Edit post" : "Add new Employee";
  const buttonText = editMode ? "Edit" : "Add";
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    if (editMode) {
      handleEmpUpdate(values, history);
    } else {
      handleNewEmpSubmit(values, history);
    }
  };
  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="id"
          type="text"
          disabled={editMode ? true : false}
          label="id"
          component={InputField}
          hidden={editMode ? false : true}
        />
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
        <div>
          <label>Gender</label>
          <div>
            <label>
              <Field
                name="gender"
                component="input"
                type="radio"
                label="gender"
                value="MALE"
              />
              male
            </label>
            <label>
              <Field
                name="gender"
                component="input"
                type="radio"
                label="gender"
                value="FEMALE"
              />
              Female
            </label>
          </div>
        </div>
        <Field name="email" type="text" label="Email" component={InputField} />
        <div>
          <CustomButton type="submit">{buttonText}</CustomButton>
          <CustomButton onClick={() => history.push("/dashboard")}>
            Cancel
          </CustomButton>
        </div>
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
  enableReinitialize: true,
})(EmployeeForm);
