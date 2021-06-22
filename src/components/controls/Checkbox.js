import {Checkbox as MuiCheckbox, FormControlLabel} from '@material-ui/core';


export default function Checkbox(props) {
    const { label, value, name, onChange, error = null} = props;
  
    const convertToDefaultPara = (event) => ({
      target: {
        name,
        value : event.target.checked
      },
    });
  
    return (
        <FormControlLabel
        control={<MuiCheckbox checked={value} color="primary"  onChange={(e) => onChange(convertToDefaultPara(e))} name={name}  {...(error && { error: true, helperText: error })}/>}
        label={label}
      />
    );
  }