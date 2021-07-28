import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { withRouter, Redirect } from "react-router";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputField from "../input-field/InputField";
import { fetchUser } from "../../redux/actions/";
import CustomButton from "../customButton/CustomButton";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Login = (props) => {
  const classes = useStyles();
  const { isLoggedIn, handleSubmit, history, pristine, submitting } = props;

  const onSubmit = (formValues) => {
    props.fetchUser(formValues, history);
  };

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.form}
          noValidate
        >
          <div className="form-group">
            <Field
              name="username"
              type="text"
              label="Username"
              required
              id="username"
              autoComplete="username"
              variant="outlined"
              margin="normal"
              fullWidth
              autoFocus
              component={InputField}
            />
          </div>
          <Field
            name="password"
            type="password"
            label="Password"
            required
            id="password"
            autoComplete="password"
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
            component={InputField}
          />

          <CustomButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={pristine || submitting}
          >
            Login
          </CustomButton>
        </form>
      </div>
    </Container>
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
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};
export default reduxForm({ form: "loginForm", validate })(
  connect(mapStateToProps, { fetchUser })(withRouter(Login))
);
