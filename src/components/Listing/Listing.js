import { useState, useEffect, useContext, useRef } from "react";
import ListingFrom from "./ListingForm";
import { makeStyles, Typography } from "@material-ui/core";
import { useForm } from "../useForm";
import { ListingContext } from "../../context/ListingContext";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { serverURL } from "../../utils/auth";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    paddingLeft: theme.spacing(3),
  },
}));

let initialValues = {
  title: "",
  available_from: null,
  min_rental_period: "",
  type: "",
  total_size: "",
  room_size: "",
  rent: "",
  member: "",
  pictures: "",
  city_registration: null,
  status: "active",
  street_number: "",
  street_name: "",
  post_code: "",
  city: "",
};

let initialFrontError = {
  street_name: "",
  city: "",
  description: "",
};

const Listing = () => {
  const classes = useStyles();
  let submitBtn = useRef();
  const [disabled, setDisabled] = useState(false);
  const { values, setValues, handleInputChange } = useForm(initialValues);
  //description is value from CKedior, so we need to set in saprate state, if we dot't then we are having probme on Edit data. At that only descrption value is shown, other are not shown on form.
  const [description, setDescription] = useState("");
  const [frontError, setFrontError] = useState(initialFrontError);

  const { createListing, getListingById, editListing, state, resetState } =
    useContext(ListingContext);

  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [isEdit, setIsEdit] = useState(false);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (location.pathname == "/listing") {
      resetState();
      setIsEdit(false);
      handleReset();
    }
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (id) {
      getListingData();
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
    return () => {
      resetState();
    };
  }, []);

  //get data to edit
  const getListingData = async () => {
    try {
      const listing = await getListingById(id);
      setValues(listing);
      setDescription(listing.description);
      if (listing.pictures) {
        let fileArray = Object.values(JSON.parse(listing.pictures));
        fileArray = fileArray.map((file) => {
          return {
            path: file,
            name: file,
            preview: `${serverURL}/uploads/${file}`,
            isExisted: true,
          };
        });
        setFiles(fileArray);
      }
    } catch (e) {
      handleReset();
    }
  };

  const validate = () => {
    let isError = false;
    const error = {};
    // if(files.length > 3){
    //   isError = true;
    // }

    // console.log(values.city);
    // if(values.city == 'null'){
    //     isError = true;
    //     error.city = "Please add city name"
    //     console.log(error.city);
    //   }
    //   else{
    //     error.city = ""
    //   }

    // if(values.street_name == undefined || !values.street_name.length){
    //   isError = true;
    //   error.streetName = "Please add valid street name"
    // }
    // else{
    //   error.streetName = ""
    // }

    // if(!(description.length < 50  &&  description.length > 1000)){
    //   isError = true;
    //   error.description = "The description length should be between 50 and 1000 characters.";
    // }else{
    //   error.description = "";
    // }

    setFrontError({ ...frontError, ...error });
    return isError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);

    // const err = validate();
    // if(err) return setDisabled(false);

    let fd = new FormData();
    fd.append("uid", values.uid);
    fd.append("title", values.title);
    fd.append("description", description);
    fd.append("available_from", values.available_from);

    fd.append("min_rental_period", values.min_rental_period);
    fd.append("type", values.type);
    fd.append("total_size", values.total_size);
    fd.append("room_size", values.room_size);
    fd.append("rent", values.rent);
    fd.append("city_registration", values.city_registration);
    fd.append("member", values.member);
    fd.append("status", values.status);

    // Address
    fd.append("street_name", values.street_name);
    fd.append("city", (values.city == "null" || !values.city) ? "" : values.city);
    fd.append("post_code", values.post_code);
    fd.append("street_number", values.street_number);

   
    Object.values(files).forEach((file) => {
      if (file.isExisted) {
        fd.append("oldPictures", file.name);
      } else {
        fd.append("pictures", file);
      }
    });

    if (isEdit) {
      const isListEdited = await editListing(id, fd);
      if (isListEdited) {
        handleReset();
        history.push("/publish/house");
      }
    } else {
      const isListCreated = await createListing(fd);
      if (isListCreated) {
        handleReset();
        history.push("/publish/house");
      }
    }
    setDisabled(false);
  };

  const handleReset = () => {
    setValues(initialValues);
    setDescription("");
    setFrontError(initialFrontError);
    setFiles([]);
    setDisabled(false);
    resetState();
  };

  const formProps = {
    isEdit,
    values,
    handleInputChange,
    handleSubmit,
    handleReset,
    description,
    setDescription,
    frontError,
    submitBtn,
    disabled,
  };

  const dropzoneProps = {
    files,
    setFiles,
  };

  return (
    <div className={classes.pageContent}>
      <Helmet>
        <title>Rent Finder - Add or Edit Listing</title>
        <meta name="description" content="Add or Update your listing" />
      </Helmet>
      <Typography variant="h6" color="primary" style={{ fontSize: "1.5rem" }}>
        {isEdit ? "Edit your Listing" : "Create your Listing"}
      </Typography>
      <ListingFrom
        {...(state.errorListing && { error: state.errorListing })}
        formProps={formProps}
        dropzone={dropzoneProps}
      />
    </div>
  );
};

export default Listing;
