import React from "react";
import { TextField } from "@material-ui/core";

export default function Input(props) {
  const { name, value, label, onChange, error = null, multiline, ...other } = props;
  return (
    <>
      {multiline ? (
        <TextField
          variant="outlined"
          label={label}
          name={name}
          value={value}
          onChange={onChange}
          multiline
          rows={10}
          color="primary"
          {...(error && { error: true, helperText: error })}
          {...other}
        />
      ) : (
        <TextField
          label={label}
          name={name}
          value={value}
          onChange={onChange}
          color="primary"
          {...(error && { error: true, helperText: error })}
          {...other}
          
        />
      )}
    </>
  );
}
