import { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Tabs, Tab } from "@material-ui/core";
import PublishInquiryCard from "./PublishInquiryCard";
import { InquiryContext } from "../../context/InquiryContext";
import { useHistory } from "react-router-dom";
import Controls from "../controls/Controls";
import Loader from '../Loader';
import {Helmet} from 'react-helmet'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 700,
    margin: "0 auto 1rem auto",
  },
  text: {
    textTransform: "none",
  },
  rootNew: {
    flexGrow: 1,
    maxWidth: 500,
    margin: "0 auto 1rem auto",
    backgroundColor  : '#fafafa',
  },
  rootNavBtn: {
    marginLeft: '0.5rem'
  },
  selected:{
    color: '#f5f6fa',
    backgroundColor  : '#d33e03'
  }
});

export default function PublishInquiry() {
  const { getInquiryByUid, deleteInquiry, state, resetPublish } = useContext(InquiryContext);
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState(0);
  const [openAlert, setOpenAlert] = useState(false);

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getInquiryByUid();
    return () =>{
      resetPublish();
    }
  }, []);

  
  const displayPrivew = (id) => {
    history.push(`room/${id}`);
  };

  const totalALL = state.inquiryDataByUid.length;
  const totalPublish = state.inquiryDataByUid.filter((post) => post.status == "active").length;
  const totalUnpublish = state.inquiryDataByUid.filter((post) => post.status == "inactive").length;

  const getPosts = () => {
    if (value == 0) {
      return state.inquiryDataByUid;
    } else if (value == 1) {
      return state.inquiryDataByUid.filter((post) => post.status == "active");
    } else if (value == 2) {
      return state.inquiryDataByUid.filter((post) => post.status == "inactive");
    }
  };

  useEffect(() => {
    setOpenAlert(true);
  }, [state.success]);

  const handleClickOpenDialog = (id) => {
    setOpenDeleteDialog(true);
    setDeleteId(id);
  };

  const handleCloseDailog = () => {
    setOpenDeleteDialog(false);
    setDeleteId(null);
  };

  const handleDelete = async () => {
    await deleteInquiry(deleteId);
    setOpenDeleteDialog(false);
    setDeleteId(null);
    getInquiryByUid();
  };

  const handleEdit = (id) => {
    history.push(`/inquiry/edit/${id}`);
  };

  const setError = () => {
    return (
      <div className="card-message-container">
        <Typography variant="h6">{state.error}</Typography>
      </div>
    );
  };

  
  const showPost = () => {
    if (getPosts().length) {
      return getPosts().map((data) => (
        <PublishInquiryCard
          key={data.id}
          inquiry={data}
          onDelete={() => handleClickOpenDialog(data.id)}
          onEdit={handleEdit}
          // onPreview={displayPrivew}
        />
      ));
    }
    else{
      return <div className="card-message-container">
          <Typography variant="h6">Nothing Found</Typography>
        </div>
    }
  };

  const dispalyArticle = () => {
    if (state.fetching) {
      return <Loader />;
    } else if (state.error) {
      return setError();
    } else {
      return showPost();
    }
  }

  return (
    <>
    <Helmet>
      <title>
        Rent Finder - Manage my inquiry lisitng
      </title>
      <meta name="description" content="Manage your inquiry" />
    </Helmet>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          centered
        >
          <Tab className={classes.text} label={`All(${totalALL})`} />
          <Tab className={classes.text} label={`Publish(${totalPublish})`} />
          <Tab
            className={classes.text}
            label={`Unpublish(${totalUnpublish})`}
          />
        </Tabs>
      </Paper>
      <div className="listing-card-container">
        <div style={{
                  border: "1px solid #012f53",
                  backgroundColor: "rgba(219,226,239, 0.1)",
                  borderRadius: "0.3em",
                  padding: "0.2rem",
                }}>
                  <p>You can add you <b>mobile number on profile/contact details</b> page. so Interested people can contact you easily</p>
        </div>
        {dispalyArticle()}
      </div>
      {state.success && (
        <Controls.AlertMessage
          message={state.success}
          open={openAlert}
          setOpen={setOpenAlert}
        />
      )}
      <Controls.DeleteDialog
      label="Hosue Inquiry"
        open={openDeleteDialog}
        onClose={handleCloseDailog}
        onDelete={handleDelete}
      />
    </>
  );
}
