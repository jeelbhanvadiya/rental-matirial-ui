import React, { useState, useEffect } from "react";
import ForgrtPasswordForm from "./ForgrtPasswordForm";
import { Link} from "react-router-dom";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {ScrollUp} from '../../utils/helper';
import { client } from "../../utils/auth";
import Greeting from '../GreetingScreen/Greeting';

const initialValues = {
  email: "",
  username: "",
};

const ForgrtPassword = () => {
  const [values, setvalues] = useState(initialValues);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setvalues({ ...values, [name]: value });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await client.post("/user/password/forget", values);
      if (res.status === 200) {
        setSuccess(res.data.success);
        return;
      }
      throw new Error(`Network error`);
    } catch (e) {
      e.response
        ? setError(e.response.data.message)
        : setError({ general: e.message });
    }
  };

  useEffect(() =>{
    ScrollUp();
  }, [])

  const forgetForm = () =>{
      return(
        <div className="form_content">
        <div className="form-title-content">
          <h2>Account recovery</h2>
          <Link to="/" className="form_close_btn"><HighlightOffIcon /></Link>
          </div>
          <ForgrtPasswordForm
            values={values}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            error={error && error}
          />
          <p>If you do not remember your username, please check your registration mail or contact us at info@rent-finder.de.</p>
        </div>
      )
  }


  return (
    <>
    <div className="container_cover"></div>
      <div className="form_container">
        {success ? <Greeting message={success} /> : forgetForm()}
      </div>
      </>
  );
};

export default ForgrtPassword;
