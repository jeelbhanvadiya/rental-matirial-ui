import { useEffect, useState } from "react";
import { useForm, Form } from "../useForm";
import Controls from "../controls/Controls";
import { Grid } from "@material-ui/core";
import { client } from "../../utils/auth";

const initialValues = {
  password: "",
  new_password: "",
  repeat_password: "",
};

const ChangePassword = ({ id }) => {
  const [values, setvalues] = useState(initialValues);
  const [error, setError] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setvalues({ ...values, [name]: value });
  };
  

  const onEditPassword = async () => {
    const body = {
      id,
      ...values,
    };
    try {
      const res = await client.post("/user/password/edit", body);
      if (res.status == 200) {
        setvalues({ ...initialValues });
        setError({});
        return;
      }
      throw new Error(`Network error`);
    } catch (e) {
      e.response
        ? setError(e.response.data.message)
        : setError({ general: e.message });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditPassword();
  };

  return (
    <div className="paper3-container personal-info-container">
      <h2>ChangePassword</h2>
      <Form>
        <Grid container>
          <Grid container item xs={12}>
            <Grid item xs={12} md={7}>
              <Controls.Input
                label="Current password"
                value={values.password}
                name="password"
                onChange={handleInputChange}
                type="text"
                error={error && error.password}
                required={true}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Controls.Input
                label="New password"
                value={values.new_password}
                name="new_password"
                onChange={handleInputChange}
                type="text"
                error={error && error.new_password}
                required={true}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Controls.Input
                label="Repeat your password"
                value={values.repeat_password}
                name="repeat_password"
                onChange={handleInputChange}
                type="text"
                error={error && error.repeat_password}
                required={true}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              {error && <span style={{ color: "red" }}>{error.general}</span>}
            </Grid>
            <Grid item xs={12} md={7}>
              <Controls.Button
                text="SET NEW PASSWORD"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default ChangePassword;
