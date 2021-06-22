import { Grid, makeStyles} from "@material-ui/core";
import Controls from "../controls/Controls";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
      margin: theme.spacing(1),
    },
  }, 
}));

const Signup = ({ values, onChange, onClick, error, disabled }) => {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Controls.Input
            label="First Name"
            value={values.first_name}
            name="first_name"
            onChange={onChange}
            error={error && error.first_name}
            required={true}
            inputProps={{ maxLength: 20 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Controls.Input
            label="Last Name"
            value={values.last_name}
            name="last_name"
            onChange={onChange}
            error={error && error.last_name}
            required={true}
            inputProps={{ maxLength: 20 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Controls.Input
            label="User name"
            value={values.username}
            name="username"
            onChange={onChange}
            error={error && error.username}
            required={true}
            inputProps={{ maxLength: 15 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Controls.Input
            label="Email"
            value={values.email}
            name="email"
            onChange={onChange}
            error={error && error.email}
            required={true}
            inputProps={{ maxLength: 50 }}
          />
        </Grid>
          <Grid item xs={12}>
            <Controls.Input
              label="Email Confirmation"
              value={values.email_confirmation}
              name="email_confirmation"
              onChange={onChange}
              error={error && (error.emailConfirmation || error.email_confirmation)}
              required={true}
              inputProps={{ maxLength: 50 }}
            />
          </Grid>
        <Grid item xs={12} className="btn-center">
        <Controls.Button
            text="Register"
            type="submit"
            disabled={disabled}
            onClick={(e) => onClick(e)}
          />
        </Grid>
        <Grid item xs={12}  style={{textAlign: 'center'}}><Link to="/login" className="font-color">Already have an account? <b style={{textDecoration: 'underline'}}>Log in</b></Link></Grid>
        <Grid item xs={12} style={{textAlign: 'center', fontSize:'0.8rem'}}><br/>By registering, you accept our <Link to="/terms" className="font-color">Terms of Service</Link> and <Link to="policy" className="font-color">Privacy Policy</Link>.</Grid>

      </Grid>
    </form>
  );
}; 

export default Signup;
