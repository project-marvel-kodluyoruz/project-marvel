import {register} from "../../authentication/Authentication";
import { Formik } from "formik";
import * as yup from "yup";
import "./Register.scss";
import { useState } from "react";

const Register = () => {
  const [appear, setAppear] = useState(true);
  let schema = yup.object().shape({
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Password must include min 6 character"),
    email: yup.string().email().required("Please enter your email"),
    confirmPassword: yup
      .string()
      .required("Please enter your password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  return (
    <div className="register-body">
    <div className="form-container">
      <div className="form-background">
        <img className="form-background-image" src="https://www.enjpg.com/img/2020/iron-man-8-scaled.jpg" alt="" />
        <p className="accordion-button" onClick={() => setAppear((s) => !s)}> {appear ? "-" : "+"}</p>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validationSchema={schema}
          onSubmit={(values, { setSubmitting }) => {
            register(values.email.toLowerCase().trim(), values.password);
            setSubmitting(false);
          }}>

          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) =>
            appear && (
              <form onSubmit={handleSubmit} className="register-form">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Please enter your email"
                  className="register-input" />
                <span>{errors.email && touched.email && errors.email}</span>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Please enter your password"
                  className="register-input" />
                <span>{errors.password && touched.password && errors.password}</span>
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  placeholder="Please confirm your password"
                  className="register-input" />
                <span>{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="register-button">Register</button>
                  
              </form>
            )
          }
        </Formik>
      </div>
    </div>
    </div>
  );
};

export default Register;
