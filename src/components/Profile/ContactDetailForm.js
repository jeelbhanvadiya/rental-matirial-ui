import {useEffect} from 'react';
import { Form } from "../useForm";
import Controls from "../controls/Controls";
import { Grid } from "@material-ui/core";
const ContactDetail = ({ values, onInputChange, state, onSubmit}) => {

  return (
    <div className="paper3-container personal-info-container">
      <h2>Contact Information</h2>
      <Form>
        <Grid container>
          
          <Grid container item xs={12}>
            <Grid item xs={12} md={7}>
              <Controls.Input
                label="Your email address"
                value={values.email}
                name="email"
                onChange={onInputChange}
                error={state.error && state.error.email}
                required={true}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Controls.Input
                label="Your phone number"
                value={values.mobile ? values.mobile : ""}
                name="mobile"
                onChange={onInputChange}
                error={state.error && state.error.mobile}
              />
            </Grid>
          </Grid>
         

          <Grid item sm={8}>
            <Controls.Button text="SAVE CHANGES" type="submit" size="small" onClick={(e) => onSubmit(e)} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default ContactDetail;
