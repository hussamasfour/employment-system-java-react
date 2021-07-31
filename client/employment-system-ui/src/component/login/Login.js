import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { useHistory, Redirect } from "react-router-dom";

import InputField from "../input-field/InputField";
import { fetchUser } from "../../redux/actions/";
import CustomButton from "../customButton/CustomButton";

const Login = ({ handleSubmit }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const error = useSelector((state) => state.auth.errorMessage);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmitHandler = (formValues) => {
    dispatch(fetchUser(formValues, history));
  };

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="row d-flex justify-content-center align-item-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div
          className="card bg-dark text-white"
          style={{ borderRadius: "1rem" }}
        >
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your username and password!
              </p>

              {error ? <span className="bg-danger">{error}</span> : null}
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <Field
                  name="username"
                  type="text"
                  label="Username"
                  id="username"
                  className="form-control form-control-lg"
                  component={InputField}
                />

                <Field
                  name="password"
                  type="password"
                  label="Password"
                  id="password"
                  className="form-control form-control-lg"
                  component={InputField}
                />

                <CustomButton
                  type="submit"
                  className="btn btn-outline-light btn-lg px-5"
                >
                  Login
                </CustomButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const validate = (login) => {
  const errors = {};
  if (!login.username) {
    errors.username = "*Required";
  }

  if (!login.password) {
    errors.password = "*Required";
  }
  return errors;
};

export default reduxForm({ form: "loginForm", validate })(Login);
