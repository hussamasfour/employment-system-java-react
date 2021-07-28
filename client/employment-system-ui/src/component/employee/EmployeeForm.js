import { Grid, makeStyles } from "@material-ui/core";
import { RadioButton } from "material-ui/RadioButton";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { reduxForm, Field } from "redux-form";
import { addEmployee, updateEmployee } from "../../redux/actions";
import validateEmail from "../../utils/validateEmail";
import CustomButton from "../customButton/CustomButton";
import InputField from "../input-field/InputField";
import RadioGroup from "../input-field/RadioGroup";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));
const EmployeeForm = ({
  handleSubmit,
  addEmployee,
  updateEmployee,
  history,
  editMode,
  employee,
}) => {
  const classes = useStyle();
  const title = editMode ? "Edit post" : "Add new Employee";
  const buttonText = editMode ? "Edit" : "Add";
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
      <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
        <Grid className="container">
          <Grid item xs={6}>
            <Field
              name="id"
              type="text"
              cvalue={employee ? employee.id : ""}
              label="id"
              variant="outlined"
              component={InputField}
              hidden={editMode ? false : true}
            />

            <Field
              name="firstName"
              type="text"
              cvalue={employee ? employee.firstName : ""}
              label="First Name"
              variant="outlined"
              component={InputField}
            />

            <Field
              name="lastName"
              type="text"
              cvalue={employee ? employee.lastName : ""}
              label="Last Name"
              variant="outlined"
              component={InputField}
            />

            <Field
              name="dob"
              type="date"
              label="DOB"
              component={InputField}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              name="salary"
              type="number"
              cvalue={employee ? employee.salary : ""}
              label="Salary"
              variant="outlined"
              component={InputField}
            />
            <Field name="gender" component={RadioGroup}>
              <RadioButton value="male" label="male" />
              <RadioButton value="female" label="female" />
            </Field>

            <Field
              name="email"
              type="text"
              cvalue={employee ? employee.email : ""}
              label="Email"
              variant="outlined"
              component={InputField}
            />

            <div>
              <CustomButton
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                {buttonText}
              </CustomButton>
              <CustomButton
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => history.push("/dashboard")}
              >
                Cancel
              </CustomButton>
            </div>
          </Grid>
        </Grid>
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
