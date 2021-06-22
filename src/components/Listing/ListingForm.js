
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
import Dropzone from "./Dropzone";
import CitySearchbar from "../../components/CitySearchbar";

const ListingFrom = ({ formProps, error = null, dropzone }) => {
  const {
    isEdit,
    values,
    handleInputChange,
    handleSubmit,
    handleReset, 
    description,
    setDescription,
    frontError,
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
          >
            <Grid item xs={12} md={6}>
              <div style={{ height: "1rem" }}></div>
              <Typography variant="subtitle2">Listing Address</Typography>
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
            <Grid item xs={12} md={2}>
                   <Controls.Input
                    label="Street Name"
                    value={values.street_name ? values.street_name : ""}
                    name="street_name"
                    onChange={handleInputChange}
                    error={error && error.street_name}
                    required={true}
                    inputProps={{ maxLength: 100 }}
                  />
            </Grid>
            <Grid item xs={6} md={1}>
                  <Controls.Input
                    label="House No."
                    value={values.street_number ? values.street_number : ""}
                    name="street_number"
                    onChange={handleInputChange}
                    inputProps={{ maxLength: 6 }}
                    error={error && error.street_number}
                  />
            </Grid>
            <Grid item xs={6} md={1}>
                  <Controls.Input
                    label="Post Code"
                    value={values.post_code ? values.post_code : ""}
                    name="post_code"
                    onChange={handleInputChange}
                    type="number"
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 5);
                    }}
                    InputProps={{
                      inputProps: { min: 1 },
                    }}
                    required={true}
                    error={error && error.post_code}
                  />
            </Grid>
            <Grid item xs={12} md={2}>
              <CitySearchbar isSearchbar={false} value={values.city} name="city" onCityChange={handleInputChange} error={error && error.city} />
            </Grid>
            <Grid item md={6}></Grid>
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
              <Controls.Select
                lable="What kind of place are you listing"
                value={values.type ? values.type : ""}
                name="type"
                onChange={handleInputChange}
                options={placeType}
                error={error && error.type}
                required={true}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Controls.Input
                label="Monthly Rent"
                value={values.rent ? values.rent : ""}
                name="rent"
                onChange={handleInputChange}
                type="number"
                required={true}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 4);
                }}
                InputProps={{
                  inputProps: { min: 0 },
                  endAdornment: (
                    <InputAdornment position="start">€</InputAdornment>
                  ),
                }}
                error={error && error.rent}
              />
            </Grid>
            <Grid item md={6}></Grid>
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
                lable="Available From"
                name="available_from"
                value={values.available_from}
                onChange={handleInputChange}
                isDOB={false}
                error={error && error.available_from}
                required={true}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Controls.Select
                lable="Minimum rental period"
                value={values.min_rental_period ? values.min_rental_period : ""}
                name="min_rental_period"
                onChange={handleInputChange}
                options={rentalPeriod}
                error={error && error.min_rental_period}
              />
            </Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>

          


          <Grid
            container
            item
            xs={12}
            spacing={3}
            direction="row"
            justify="space-between"
          >
            <Grid item xs={6} md={3}>
            <Controls.Input
                label="Room size"
                value={values.room_size ? values.room_size : ""}
                name="room_size"
                onChange={handleInputChange}
                type="number"
                InputProps={{
                  inputProps: { min: 0 },
                  endAdornment: (
                    <InputAdornment position="start">m²</InputAdornment>
                  ),
                }}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 3);
                }}
                error={error && error.room_size}
              />
            </Grid>
            <Grid item xs={6} md={3}>
            <Controls.Input
                label="Total size"
                value={values.total_size ? values.total_size : ""}
                name="total_size"
                onChange={handleInputChange}
                type="number"
                InputProps={{
                  inputProps: { min: 0 },
                  endAdornment: (
                    <InputAdornment position="start">m²</InputAdornment>
                  ),
                }}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 3);
                }}
                error={error && error.total_size}
              />
            </Grid>
            <Grid item md={6}></Grid>
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
              <Controls.Input
                label="Number of housemate"
                value={values.member ? values.member : ""}
                name="member"
                onChange={handleInputChange}
                type="number"
                error={error && error.member}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 2);
                }}
                InputProps={{ inputProps: { min: 0 } }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              
            </Grid>
            <Grid item md={6}></Grid>
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
              <Typography variant="subtitle2">Upload Photos (maximum 3 images are possible to upload)</Typography>
              <div style={{ height: "0.5rem" }}></div>
              <Dropzone {...dropzone}/>
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

export default ListingFrom;
