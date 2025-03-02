// src/Signup.js
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/auth";
const Signup = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const goToLogin = () => {
    navigate("/login");
  };

  const handleSignup = async (values) => {
    try {
     
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;
      console.log("User signed up successfully:", user);
      
      navigate("/login");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md w-96 m-auto">
      <h2 className="text-2xl mb-4">Signup</h2>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSignup}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.username && touched.username && (
                <div className="text-red-500 text-sm">{errors.username}</div>
              )}
            </div>
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm">{errors.email}</div>
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
            <div>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <div className="text-red-500 text-sm">
                  {errors.confirmPassword}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white rounded-md"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <div className="mt-4 text-center">
        <p className="text-sm">
          Already have an account?{" "}
          <button onClick={goToLogin} className="text-blue-500 hover:underline">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
