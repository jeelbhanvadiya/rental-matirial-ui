import React from "react";
import './profile.scss'
import {Button, Grid, TextField} from "@material-ui/core";

const ProfilePage = () => {
    return (
        <div className='profile'>
            <Grid container>
                <Grid item xs={12} md={6}  style={{padding: '10px'}}>
                    <div>
                        <Button variant="contained" className="button-big" style={{paddingTop: 'unset'}} fullWidth>Personal information </Button>
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
                <Grid item xs={12} md={6} style={{padding: '10px'}}>
                    <div className="personalInfo">
                        <h1 className="heading">Personal information</h1>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <div className="inputFields">
                                    <TextField id="standard-basic"  fullWidth label="First name"/>
                                </div>
                                <div className="inputFields">
                                    <TextField id="standard-basic"  fullWidth label="Date of birth"/>
                                </div>
                                <div className="inputFields">
                                    <TextField id="standard-basic"  fullWidth label="Nationality "/>
                                </div >
                                <div className="inputFields">
                                    <Button className='button-small' variant="contained"  fullWidth >Save changes </Button>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="inputFields">
                                <TextField id="standard-basic" label="Last name" fullWidth/>
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
