import React from "react";
import { FormControl, Select as MuiSelect, InputLabel, MenuItem, FormHelperText } from "@material-ui/core";

export default function Select(props) {
  const { lable, name, value, onChange, options, required = false, error = null } = props;
  return (
      <FormControl>
      <InputLabel required={required} color="primary">{lable}</InputLabel>
      <MuiSelect  value={value} onChange={onChange} label={lable} name={name} color="secondary">
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>{item.option}</MenuItem>
        ))}
        
      </MuiSelect>
      <FormHelperText {...(error && {error: true})}>{error}</FormHelperText>
    </FormControl>
  );
}
