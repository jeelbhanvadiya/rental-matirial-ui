import { useState, useEffect} from "react";
import { Form } from "../useForm";
import Controls from "../controls/Controls";
import { Grid } from "@material-ui/core";
import {genderItem, userTypes} from '../../data/listingData';



const PersonalInfo = ({ values, onInputChange, state, onSubmit }) => {
  
  const [selectedDate, handleDateChange] = useState(new Date());

  
  

  return (
    <div className="paper3-container personal-info-container">
      <h2>Personal Information</h2>
      <Form>
        <Grid container>
          <Grid container item xs={12}>
            <Grid item xs={12} md={5}>
              <Controls.Input
                label="First Name"
                value={values.first_name}
                name="first_name"
                onChange={onInputChange}
                error={state.error && state.error.first_name}
                required={true}
              />
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item xs={12} md={5}>
              <Controls.Input
                label="Last Name"
                value={values.last_name}
                name="last_name"
                onChange={onInputChange}
                error={state.error && state.error.last_name}
                required={true}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={7}>
            <Controls.DataPicker
              lable="Date of Birth"
              name="dob"
              value={values.dob}
              onChange={onInputChange}
              isDOB={true}
              error={state.error && state.error.dob}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Controls.Input
              label="Nationality"
              value={values.nationality ? values.nationality : ""}
              name="nationality"
              onChange={onInputChange}
              error={state.error && state.error.nationality}
            />
          </Grid>
          <Grid item xs={12}>
            <Controls.RadioGroup
              lable="Gender"
              name="gender"
              value={ values.gender ? values.gender : ""}
              onChange={onInputChange}
              items={genderItem}
              error={state.error && state.error.gender}
            />
          </Grid>

          {/* <Grid item xs={12}>
            <Controls.RadioGroup
              lable="Are you Owner or Tenant?"
              name="type"
              value={values.type ? values.type : ""}
              onChange={onInputChange}
              items={userTypes}
              error={state.error && state.error.type}
            />
          </Grid> */}

          <Grid item xs={12}>
            <Controls.Button text="SAVE CHANGES" type="submit" size="small" onClick={(e) => onSubmit(e)} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default PersonalInfo;
