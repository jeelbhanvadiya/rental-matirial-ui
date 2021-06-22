import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core";


export const useForm = (initialValue) =>{
    const [values, setValues] = useState(initialValue);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };


    return {
        values, 
        setValues, 
        handleInputChange
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiFormControl-root': {
        width: "100%",
        margin: theme.spacing(1),
      },
    },
  }));

export const Form = (props) =>{
    const classes = useStyles();
    return(
        <form className={classes.root}  autoComplete='off' encType="multipart/form-data">
            {props.children}
        </form>
    )
}

