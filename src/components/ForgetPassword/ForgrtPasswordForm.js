import { Grid, makeStyles } from "@material-ui/core";
import Controls from "../controls/Controls";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
      margin: theme.spacing(1),
    },
  },
}));

const ForgrtPasswordForm = ({ onSubmit, onChange, error }) => {
  const classes = useStyles();
  return (
    <form className={classes.root} >
      <Grid container>
        <Grid item xs={12}>
          <Controls.Input
            label="Email"
            name="email"
            onChange={onChange}
            error={error && error.email}
            required={true}
            inputProps={{ maxLength: 50 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Controls.Input
            label="User Name"
            name="username"
            onChange={onChange}
            error={error && error.username}
            required={true}
            inputProps={{ maxLength: 15 }}
          />
        </Grid>
        {error && <span style={{ color: "red" }}>{error.general}</span>}
        <Grid item xs={12} className="btn-center">
          <Controls.Button text="Submit" type="submit" onClick={onSubmit} />
        </Grid>
        
      </Grid>
    </form>
  );
};

export default ForgrtPasswordForm;
