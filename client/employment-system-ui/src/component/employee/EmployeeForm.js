import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { reduxForm, Field } from "redux-form";
import validateEmail from "../../utils/validateEmail";
import CustomButton from "../customButton/CustomButton";
import InputField from "../input-field/InputField";

const EmployeeForm = ({
  handleSubmit,
  editMode,
  handleEmpUpdate,
  handleNewEmpSubmit,
}) => {
  const title = editMode ? "Edit post" : "Add new Employee";
  const buttonText = editMode ? "Edit" : "Add";
  const history = useHistory();

  const onSubmit = (values) => {
    if (editMode) {
      handleEmpUpdate(values, history);
    } else {
      handleNewEmpSubmit(values, history);
    }
  };
  return (
    <div className="row d-flex justify-content-center align-item-center h-100">
      <div className="col-12 col-md-8 col-lg-8 col-xl-7">
        <div
          className="card bg-dark text-white"
          style={{ borderRadius: "1rem" }}
        >
          <div className="card-body p-5 ">
            <h2 className="fw-bold mb-2 text-uppercase">{title}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Field
                name="id"
                type="text"
                disabled={editMode ? true : false}
                label="id"
                component={InputField}
                hidden={editMode ? false : true}
                className="form-control "
              />
              <div className="row">
                <div className="col-lg-6">
                  <Field
                    name="firstName"
                    type="text"
                    label="First Name"
                    component={InputField}
                    className="form-control"
                  />
                </div>

                <div className="col-lg-6">
                  <Field
                    name="lastName"
                    type="text"
                    label="Last Name"
                    component={InputField}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <Field
                    name="dob"
                    type="date"
                    label="DOB"
                    component={InputField}
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6">
                  <Field
                    name="salary"
                    type="number"
                    label="Salary"
                    component={InputField}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <legend className="col-form-label">Gender</legend>
                  <div className="form-check form-check-inline">
                    <Field
                      name="gender"
                      component="input"
                      type="radio"
                      label="gender"
                      value="MALE"
                      className="form-check-input"
                    />
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Field
                      name="gender"
                      component="input"
                      type="radio"
                      label="gender"
                      value="FEMALE"
                      className="form-check-input"
                    />
                    <label className="form-check-label">Female</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <Field
                    name="email"
                    type="text"
                    label="Email"
                    component={InputField}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <CustomButton type="submit" className="btn btn-primary ">
                    {buttonText}
                  </CustomButton>

                  <CustomButton
                    onClick={() => history.push("/dashboard")}
                    className="btn btn-danger"
                  >
                    Cancel
                  </CustomButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
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
