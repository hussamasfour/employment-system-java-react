import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router";
import InputField from "../input-field/InputField";
import { fetchUser } from "../../redux/actions/";
import { Redirect } from "react-router";

const Login = (props) => {
  const { isLoggedIn, handleSubmit, history } = props;

  const onSubmit = (formValues) => {
    props.fetchUser(formValues, history);
  };

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="row">
      <form onSubmit={handleSubmit(onSubmit)} className="col-md-6">
        <div className="form-group">
          <Field
            name="username"
            type="text"
            label="Username"
            component={InputField}
          />
        </div>
        <Field
          name="password"
          type="password"
          label="Password"
          component={InputField}
        />

        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};
export default reduxForm({ form: "loginForm" })(
  connect(mapStateToProps, { fetchUser })(withRouter(Login))
);
