import React, { useState, useContext, useEffect } from "react";
import SignupForm from "./SignupForm";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Greeting from "../GreetingScreen/Greeting";

const initialValues = {
  first_name: "",
  last_name: "",
  username: "",
  email: "",
  email_confirmation: "",
  password: "",
  policy: false,
};

const Signup = () => {
  const history = useHistory();
  const [values, setValues] = useState(initialValues);
  const [disabled, setDisabled] = useState(false);
  const { createUser, state, resetState } = useContext(UserContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    resetState();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      ...values,
    };
    setDisabled(true);
    await createUser(newUser);
    setDisabled(false);
    // if (isUserCreated) {
    //   history.push("/");
    // }
  };

  const signup = () => {
    return (
      <div className="form_content">
        <div className="form-title-content">
          <h2>Create your Account</h2>
          <Link to="/" className="form_close_btn">
            <HighlightOffIcon />
          </Link>
        </div>
        <SignupForm
          values={values}
          onChange={handleInputChange}
          onClick={handleSubmit}
          error={state && state.error}
          disabled={disabled}
        />
        </div>
    );
  };
  return (
    <>
      <div className="container_cover"></div>
      <div className="form_container">
          {state.success ? <Greeting message={state.success} /> : signup()}
      </div>
    </>
  );
};

export default Signup;
