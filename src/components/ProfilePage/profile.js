import React from "react";
import './profile.scss'
import {Button, Grid, TextField} from "@material-ui/core";

const ProfilePage = () => {
    return (
        <div className='profile'>
            <Grid container>
                <Grid item xs={12} md={5} className="padding10">
                    <div>
                        <Button variant="contained" className="button-big padding-unset" fullWidth>Personal
                            information </Button>
                    </div>
                    <div>
                        <Button variant="contained" className="button-big" fullWidth>Contact details</Button>
                    </div>
                    <div>
                        <Button variant="contained" className="button-big" fullWidth>Change password </Button>
                    </div>
                    <div>
                        <Button variant="contained" className="button-big" fullWidth>Account removal </Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={1}/>
                <Grid item xs={12} md={6} className="padding10">
                    <div className="personalInfo">
                        <div className="heading">Personal information</div>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <div className="inputFields">
                                    <TextField id="standard-basic" fullWidth label="First name"/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="inputFields">
                                    <TextField id="standard-basic" label="Last name" fullWidth/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="inputFields">
                                    <TextField id="standard-basic" fullWidth label="Date of birth"/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} />
                            <Grid item xs={12} md={6}>
                                <div className="inputFields">
                                    <TextField id="standard-basic" fullWidth label="Nationality "/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} />
                            <Grid item xs={12} md={6}>
                                <div className="inputFields">
                                    <Button className='button-small' variant="contained" fullWidth>Save
                                        changes </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProfilePage
