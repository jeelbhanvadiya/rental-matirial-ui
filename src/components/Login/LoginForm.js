import {Button as MuiButton, Grid, makeStyles} from "@material-ui/core";
import Controls from "../controls/Controls";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
      margin: theme.spacing(1),
    },
  },
  colorRed: {
    color: 'red',
  }
}));

const LoginForm = ({ onAuth, onSetCredentials, error }) => {
  const classes = useStyles();
  return (
    <form className={classes.root} >
      <Grid container>
        <Grid item xs={12}>
          <Controls.Input
            label="Email"
            name="email"
            onChange={onSetCredentials}
            error={error && error.email}
            required={true}
            inputProps={{ maxLength: 50 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Controls.Input
            label="Password"
            name="password"
            onChange={onSetCredentials}
            error={error && error.password}
            required={true}
            type="password"
            inputProps={{ maxLength: 15 }}
          />
        </Grid>
        {error && <span className={classes.colorRed}>{error.network}</span>}
        <Grid item xs={12} className="btn-center">
          <MuiButton
                     size={'small'}
                     color={"primary"}
                     variant={"contained"}
          >
            login
          </MuiButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
