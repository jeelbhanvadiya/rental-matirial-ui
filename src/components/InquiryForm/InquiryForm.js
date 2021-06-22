
import { Grid, InputAdornment, Typography} from "@material-ui/core";
import {
  placeType,
  rentalPeriod,
  listingStatus,
  registrationItems
} from "../../data/listingData";
import RootRef from '@material-ui/core/RootRef';
import { Form } from "../useForm";
import Controls from "../controls/Controls";
import CitySearchbar from "../CitySearchbar";



const InquiryFrom = ({ formProps, error = null}) => {
  const {
    isEdit,
    values,
    handleInputChange,
    handleSubmit,
    handleReset,
    description,
    setDescription,
    submitBtn,
    disabled
  } = formProps;
  return (
    <>
      <Form>
        <Grid container>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={12} md={6}>
              <Controls.Input
                label="Title"
                value={values.title ? values.title : ""}
                name="title"
                onChange={handleInputChange}
                error={error && error.title}
                required={true}
                inputProps={{ maxLength: 100 }}
              />
              <div style={{ height: "1rem" }}></div>
              <Typography variant="subtitle2">Listing Description *</Typography>
              <div style={{ height: "0.2rem" }}></div>
              <Controls.CkEeditor
                description={description}
                setDescription={setDescription}
              />
              {error && error.description && (
                <p className="MuiFormHelperText-root Mui-error Mui-required">
                  {error.description}
                </p>
              )}
            </Grid>
          </Grid>

         

          <Grid
            container
            item
            xs={12}
            spacing={3}
            direction="row"
            justify="space-between"
          >
            <Grid item xs={12} md={3}>
            <Controls.DataPicker
                lable="Looking From"
                name="looking_from"
                value={values.looking_from}
                onChange={handleInputChange}
                isDOB={false}
                error={error && error.looking_from}
                required={true}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CitySearchbar isSearchbar={false} value={values.city} name="city" onCityChange={handleInputChange} error={error && error.city} />
            </Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>

        
          <Grid container item xs={12}  spacing={3}>
            <Grid item xs={12} md={3}>
            <Controls.Select
                lable="What type of place are you looking"
                value={values.type ? values.type : ""}
                name="type"
                onChange={handleInputChange}
                options={placeType}
                error={error && error.type}
              /> 
            </Grid>
          </Grid>

          <Grid container item xs={12}>
            <Grid item xs={12} md={6}>
            <div style={{ height: "1.5rem" }}></div>
            <Controls.RadioGroup
                lable="Is City Registation possible?"
                name="city_registration"
                value={values.city_registration ? values.city_registration : null}
                onChange={handleInputChange}
                items={registrationItems}
                error={error && error.city_registration}
                required={true}
              />
              <div style={{ height: "0.5rem" }}></div>
              
              <Controls.RadioGroup
                lable="Listing Status"
                name="status"
                value={values.status ? values.status : ""}
                onChange={handleInputChange}
                items={listingStatus}
              />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <div>
              <RootRef rootRef={submitBtn}>
                <Controls.Button
                  text={isEdit ? "Edit" : "Submit"}
                  type="submit"
                  size="medium"
                  onClick={handleSubmit}
                  disabled={disabled}
                />
              </RootRef>
              <Controls.Button
                color="default"
                text="Reset"
                size="medium"
                onClick={handleReset}
              />
            </div>
          </Grid>
        </Grid>
      </Form>
    </>
  );
};

export default InquiryFrom;
