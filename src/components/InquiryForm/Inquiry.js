import { useState, useEffect, useContext, useRef } from "react";
import InquiryForm from "./InquiryForm";
import { makeStyles, Typography } from "@material-ui/core";
import { useForm } from "../useForm";
import { InquiryContext } from "../../context/InquiryContext";
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
  city: "",
  looking_from: null,
  type: "",
  city_registration: null,
  status: "active"
};

const Inquiry = () => {
  const classes = useStyles();
  let submitBtn = useRef();
  const [disabled, setDisabled] = useState(false);
  const { values, setValues, handleInputChange } = useForm(initialValues);
  const [description, setDescription] = useState("");

  const { createInquiry, getInquiryById, editInquiry, state, resetState } =
    useContext(InquiryContext);

  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (location.pathname == "/inquiry") {
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
      getInquiryData();
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
    return () => {
      resetState();
    };
  }, []);

  //get data to edit
  const getInquiryData = async () => {
    try {
      const inquiry = await getInquiryById(id);
      setValues(inquiry);
      setDescription(inquiry.description);
    } catch (e) {
      handleReset();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitBtn.current) setDisabled(true);

    values.description = description;
    if (isEdit) {
      const isInquiryEdited = await editInquiry(id, values);
      if (isInquiryEdited) {
        handleReset();
        history.push("/publish/inquiry");
      }
    } else {
      const isInquiryCreted = await createInquiry(values);
      if (isInquiryCreted) {
        handleReset();
        history.push("/publish/inquiry");
      }
    }
    setDisabled(false);
  };

  const handleReset = () => {
    setValues(initialValues);
    setDescription("");
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
    submitBtn,
    disabled,
  };

  return (
    <div className={classes.pageContent}>
      <Helmet>
        <title>Rent Finder - List your housing enquiry</title>
        <meta name="description" content="Add or Update your Inquiry" />
      </Helmet>
      <Typography variant="h6" color="primary" style={{ fontSize: "1.5rem" }}>
        {isEdit ? "Edit your Inquiry" : "Create your Inquiry"}
      </Typography>
      <InquiryForm
        {...(state.errorInquiry && { error: state.errorInquiry })}
        formProps={formProps}
      />
    </div>
  );
};

export default Inquiry;
