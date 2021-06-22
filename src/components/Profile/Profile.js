import { useState, useContext, useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import { useForm } from "../useForm";
import { UserContext } from "../../context/UserContext";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";
import PersonalInfo from "./PersonalInfoForm";
import ContactDetail from "./ContactDetailForm";
import ChangePassword from "./ChangePasswordForm";
import RemoveAccount from "./RemoveAcoount";
import Controls from '../controls/Controls';

const initialValues = {
  uid: '',
  first_name: '',
  last_name: '',
  dob: null,
  email: '',
  mobile: '',
  gender: '',
  // type: '',
  nationality: '',
};

const Profile = () => {
  const [profileRoutes, setProfileRoutes] = useState("info");
  const { values, setValues, handleInputChange } = useForm(initialValues);
  const [openAlert, setOpenAlert] = useState(false);
  const { editUser, deleteUser, state, resetState } = useContext(UserContext);
  const { onLogout, getMyUser, token} = useContext(AuthContext);
  const history = useHistory();

  const handleDeleteUser = () => {
    deleteUser(values.uid);
    onLogout();
    history.push("/");
  };

  useEffect(() =>{
    resetState();
  }, [])

  useEffect( () => {
    const getContext = async () => {
      try {
        const { data: userData } = await getMyUser();
        setValues(userData)
      } catch (e) {
        setValues('')
      }
    };
    getContext();
  }, [token]);

  useEffect(() => {
    setOpenAlert(true);
  },[state.success]);

 


  // handle diff profile routes
  const HandleClick = (e) => {
    setProfileRoutes(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      ...values,
    };
    await editUser(values.uid, newUser);
  };

  return (
    <>
    <Container maxWidth="md">
      <Grid container>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12} md={4}>
            <Sidebar onClick={HandleClick} />
          </Grid>
          <Grid item xs={12} md={8}>
            {profileRoutes === "info" && (
              <PersonalInfo
                values={values}
                state={state}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
              />
            )}
            {profileRoutes === "contact" && (
              <ContactDetail
                values={values}
                state={state}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
              />
            )}
            {profileRoutes === "password" && <ChangePassword id={values.uid} />}
            {profileRoutes === "remove-account" && (
              <RemoveAccount onDelete={handleDeleteUser} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
    {state.success && <Controls.AlertMessage message={state.success} open={openAlert} setOpen={setOpenAlert} />}
    </>
  );
};

export default Profile;
