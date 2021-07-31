import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { useHistory, Redirect } from "react-router-dom";

import InputField from "../input-field/InputField";
import { fetchUser } from "../../redux/actions/";
import CustomButton from "../customButton/CustomButton";

const Login = ({ handleSubmit }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmitHandler = (formValues) => {
    dispatch(fetchUser(formValues, history));
  };

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="form-group">
        <Field
          name="username"
          type="text"
          label="Username"
          id="username"
          component={InputField}
        />
      </div>
      <Field
        name="password"
        type="password"
        label="Password"
        id="password"
        component={InputField}
      />

      <CustomButton type="submit">Login</CustomButton>
    </form>
  );
};

const validate = (login) => {
  const errors = {};
  if (!login.username) {
    errors.username = "Required";
  }

  if (!login.password) {
    errors.password = "passowrd must be at least  8 characters";
  }
  return errors;
};

export default reduxForm({ form: "loginForm", validate })(Login);
