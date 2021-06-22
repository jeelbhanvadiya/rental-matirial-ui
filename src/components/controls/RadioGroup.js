import Radio from "@material-ui/core/Radio";
import {
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  makeStyles,
  FormHelperText
} from "@material-ui/core/";

const useStyles = makeStyles( theme => ({
  root: {
    flexDirection: "row",
  },
}));

const RadioGroup = (props) => {
  const { lable, name, value, onChange, items, required= false, error=null } = props;
  const classes = useStyles();

  return (
    <FormControl component="fieldset" required={required} {...(error && {error:true})}>
      <FormLabel component="legend">{lable}</FormLabel>
      <MuiRadioGroup
        name={name}
        value={value}
        onChange={onChange}
        classes={{ root: classes.root }}
      >
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio color="primary"  />}
            label={item.label}
          />
        ))}
      </MuiRadioGroup>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default RadioGroup;
