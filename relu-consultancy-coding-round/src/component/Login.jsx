// src/Login.js
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string()
      .email("Invalid email format")
      .required("Username (email) is required"),
    password: Yup.string().required("Password is required"),
  });

  const goToSignup = () => {
    navigate("/signup");
  };

  const handleLogin = async (values) => {
    if (!values.username || !values.password) {
      console.log("Email or password is missing");
      return;
    }
    try {
      console.log("Email:", values.username);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.username,
        values.password
      );
      const user = userCredential.user;
      console.log("User logged in successfully:", user);

      navigate("/dashboard");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div className="p-6  bg-white shadow-md rounded-md w-96 m-auto ">
      <h2 className="text-2xl mb-4">Login</h2>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <Field
                type="text"
                name="username"
                placeholder="Username (email)"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.username && touched.username && (
                <div className="text-red-500 text-sm">{errors.username}</div>
              )}
            </div>
            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.password && touched.password && (
                <div className="text-red-500 text-sm">{errors.password}</div>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>

      <div className="mt-4 text-center">
        <p className="text-sm">
          Don't have an account?{" "}
          <button
            onClick={goToSignup}
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
