import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { registerUser } from "../../redux/actions";
import CustomButton from "../customButton/CustomButton";
import InputField from "../input-field/InputField";

const SignUp = ({ handleSubmit }) => {
  const error = useSelector((state) => state.auth.errorMessage);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (formValues) => {
    dispatch(registerUser(formValues, history));
  };
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className="row d-flex justify-content-center align-item-center h-100 ">
      <div className="col-12 col-md-8 col-lg-8 col-xl-7 ">
        <div
          className="card bg-dark text-white "
          style={{ borderRadius: "1rem" }}
        >
          <div className="card-body p-5 ">
            <h2 className="fw-bold mb-5 text-uppercase text-center">
              Sign up Page
            </h2>
            {error ? (
              <div className="bg-danger mb-5">
                {error.map((err) => (
                  <div>{err}</div>
                ))}
              </div>
            ) : null}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-12 mb-3">
                  <Field
                    name="username"
                    type="text"
                    label="Username"
                    component={InputField}
                    className="form-control form-control-lg"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 mb-3">
                  <Field
                    name="email"
                    type="text"
                    label="Email"
                    component={InputField}
                    className="form-control form-control-lg"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 mb-3">
                  <Field
                    name="password"
                    type="text"
                    label="Password"
                    component={InputField}
                    className="form-control form-control-lg"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 my-5 text-center ">
                  <CustomButton type="submit" className="btn btn-primary me-2">
                    Create
                  </CustomButton>

                  <CustomButton
                    onClick={() => history.push("/")}
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

export default reduxForm({
  form: "SignUpForm",
})(SignUp);
