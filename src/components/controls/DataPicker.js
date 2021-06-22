import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { DatePicker } from "@material-ui/pickers";

export default function DataPicker(props) {
  const { lable, value, name, onChange, isDOB, required= false, error = null} = props;

  const convertToDefaultPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        label={lable}
        name={name}
        format="yyyy.MM.dd"
        value={value}
        onChange={(date) => onChange(convertToDefaultPara(name, date))}
        disableFuture={isDOB}
        required={required}
        {...(error && { error: true, helperText: error })}
      />
    </MuiPickersUtilsProvider>
  );
}
