import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../../redux/auth/operations";
import css from "./RegistrationPage.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm, setFieldError }) => {
    try {
      await dispatch(register(values)).unwrap();
      resetForm();
      navigate("/login");
    } catch (error) {
      if (error.includes("Email")) {
        setFieldError("email", error);
      } else {
        alert(error);
      }
    }
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Register</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field type="text" name="name" className={css.input} />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>
          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.input} />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" className={css.input} />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </label>
          <button type="submit" className={css.button}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
