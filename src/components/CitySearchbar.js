import React, { useState, useCallback, useMemo, useEffect, useContext } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete as MuiAutocomplete } from "@material-ui/lab";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash";
import {germanyCitys} from '../data/cityData';
import { ListingContext } from "../context/ListingContext";
import { InquiryContext } from "../context/InquiryContext";

import {useHistory, useLocation} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  endAdornment: {
    display: "none",
  },
  autocompleteRoot:{
    width: "100%",
    padding : '0.1rem 0'
  },
  input: {
    fontSize: '1rem',
    [theme.breakpoints.up("sm")]: {
      fontSize: '1.2rem',
    },
    "&::placeholder": {
      color: "#112d4e",
      opacity : 0.8,
    },
    color: "#112d4e"
  },
  autocompleteRoot1:{
    width: "100%",
  },
}));

export default function CitySearchbar({isSearchbar = true, value, name, error = null, onCityChange}) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [userSelection, setUserSelection] = useState(null);
  const {getListing} = useContext(ListingContext);
  const {getInquiry} = useContext(InquiryContext);

  const getData = useMemo(
    () =>
      _.debounce((input) => {
        if (input.length > 1) {
            try {
              const sanitizedInput = input.toLowerCase();
              const filterArray = germanyCitys.filter((option) =>option.match(new RegExp(sanitizedInput, "gi")))
              filterArray ? setOptions(filterArray) : setOptions([]);
            } catch (e) {
            }
        }
        else{
          setOptions([])
        }
      }, 500),[]);

  const delayedQuery = useCallback((input) => getData(input), [getData]);

  useEffect(() => {
    delayedQuery(inputValue);
  }, [inputValue, delayedQuery]);

  useEffect(() => {
    if(location.pathname == "/" || location.pathname == "/inquiry-list"){
      setInputValue("");
      setUserSelection(null);
    }
  }, [location.pathname]);

  const convertToDefaultPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <>
    {isSearchbar ? <MuiAutocomplete
    options={options}
    getOptionLabel={(option) => option}
    value={userSelection}
    freeSolo={true}
    onChange={(event, option, reason) => {
      // const sanitizedInput = option.replace(/[^\w\süöä]+/ig, "");
      setUserSelection(option);
      if(location.pathname  == "/" || location.pathname  == "/city"){
        getListing(option)
        history.push("/city");
        if (reason === "clear"){
          setInputValue("");
          setUserSelection(null);
          history.push("/");
        }
      }
      else if(location.pathname  == "/inquiry-list" || location.pathname  == "/inquiry-list/city"){
        getInquiry(option);
        history.push("/inquiry-list/city");
        if (reason === "clear"){
          setInputValue("");
          setUserSelection(null);
          history.push("/inquiry-list");
        }
      }
    }}
    classes={{
      root: classes.autocompleteRoot,
    }}
    filterOptions={(options, state) => options}
    
    renderInput={(params) => (
      <TextField
        {...params}
        placeholder=" Search by city"
        value={inputValue}
        
        onChange={(e) => setInputValue(e.target.value)}
       
        InputProps={{
          ...params.InputProps,
          disableUnderline: true,
          classes :{
            input: classes.input,
          },
          startAdornment: (
            <React.Fragment>
              <SearchIcon color="primary" size={30} />
              {params.InputProps.startAdornment}
            </React.Fragment>
          ),
        }}
      />
    )}
  />:<MuiAutocomplete
      options={options}
      getOptionLabel={(option) => option ? option : ''}
      getOptionSelected={(option, value) => option === value}
      value={value}
      onChange={(event, option, reason) => {
          onCityChange(convertToDefaultPara(name, option));
        if (reason === "clear"){
          setInputValue("");
        }
      }}
      classes={{
        root: classes.autocompleteRoot1,
      }}
      filterOptions={(options, state) => options}
      
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder=" enter a city"
          required={true}
          value={inputValue}
          label="City"
          {...(error && { error: true, helperText: error })}
          onChange={(e) => setInputValue(e.target.value)}
          InputProps={{
            ...params.InputProps,
          }}
        />
      )}
    /> }
    
    </>
  );
}
