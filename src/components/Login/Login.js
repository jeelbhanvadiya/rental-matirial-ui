import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import TextField from '@material-ui/core/TextField';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Grid, Button} from "@material-ui/core";
import logo from '../../image/logo.png';
import back from '../../image/back.png'
import {Link} from "react-router-dom";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div className="form_container">
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`nav-tabpanel-${index}`}
                aria-labelledby={`nav-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        '& .MuiInputBase-fullWidth': {
            borderRadius: '30px',
            borderColor: '#888888',
            height: '37px',
        },
        '& .MuiFormControl-marginNormal': {
            marginTop: '10px',
        },
        '& .MuiBox-root-63': {
            paddingLeft: '0',
            paddingRight: '0',
        },
        '& .MuiButton-root': {
            marginTop: '15px',
            textTransform: 'unset',
            backgroundColor: '#072C50',
            color: '#fff',
            borderRadius: '30px',
            border: '1px solid #757575',
        },
        '& .Mui-selected': {
            borderBottom: '5px solid orange'
        },
        '& .MuiTab-root': {
            textTransform: 'unset',
        }
    },
    links: {
        textAlign: 'center',
        marginTop: '10px',
        fontSize: '16px'
    },
    linkMargin: {
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '16px'
    },
    linkSmall: {
        textAlign: 'center',
        marginTop: '10px',
        fontSize: '10px'
    },
    textField: {
        width: '300px',
        fontSize: '14px'
    },
    backHome: {
        paddingLeft: '50px',
        fontSize: '16px',
        color: '#072C50'
    },
    pr5: {
        paddingRight: '5px'
    },
    pd18: {
        padding: '18px'
    },
    dFlex: {
        display: 'flex',
        flexDirection: 'column'
    },
    validation: {
        color: 'red',
    }
}));

export default function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [errors, setError] = useState({});
    const [loginDetails, setLoginDetails] = useState({
        firstName: "",
        firstNameRegister:"",
        lastName: "",
        password: "",
        emailConfirm: "",
        email: "",
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleLoginChange = e => {
        const {name, value} = e.target;
        setLoginDetails({...loginDetails, [name]: value})
    }

    const validation = (name, value) => {
        const emailRegx = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/ig;
        switch (name) {
            case 'firstName':
                if (!value) {
                    return "Please Enter First Name!!";
                } else {
                    return null
                }
            case 'password':
                if (!value) {
                    return "Please Enter Password!!";
                } else {
                    return null
                }
            case 'firstNameRegister':
                if (!value) {
                    return "Please Enter First Name!!";
                } else {
                    return null
                }
            case 'lastName':
                if (!value) {
                    return "Please Enter lastName!!";
                } else {
                    return null
                }
            case 'email':
                if (!value) {
                    return "Please Enter email!!";
                } else {
                    return null
                }
            case 'emailConfirm':
                if (!value) {
                    return "Please Enter emailConfirm!!";
                } else {
                    return null
                }
            default:
                return  null
        }
    };

    const handleSubmit = () => {
        let allErrors = {};
        const userData = {
            firstName: loginDetails.firstName,
            firstNameRegister: loginDetails.firstNameRegister,
            password: loginDetails.password,
            lastName: loginDetails.lastName,
            email: loginDetails.email,
            emailConfirm: loginDetails.emailConfirm
        }
        Object.keys(userData).forEach(key => {
            const error = validation(key, userData[key])
            if (error && error.length) {
                allErrors[key] = error;
            }
        })
        if (Object.keys(allErrors).length) {
            setError(allErrors)
        } else {
            console.log("register")
            setError({})
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.backHome}>
                <img src={back} alt='back' height='10' className={classes.pr5}/>
                back to home
            </div>
            <div className="form_container">
                <img src={logo} alt="logo" width='250' className={classes.pd18}/>
            </div>
            <div className="form_container">
                <Tabs
                    // variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <LinkTab label="login" href="/drafts" {...a11yProps(0)} />
                    <LinkTab label="Sign up" href="/trash" {...a11yProps(1)} />
                </Tabs>
            </div>
            <TabPanel value={value} index={0}>
                <div className={classes.dFlex}>
                    <TextField
                        id="outlined-margin-normal"
                        className={classes.textField}
                        name="firstName"
                        value={loginDetails.firstName}
                        onChange={handleLoginChange}
                        placeholder="Email *"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <span className={classes.validation}>{errors.firstName}</span>
                </div>
                <div className={classes.dFlex}>
                    <TextField
                        id="outlined-margin-normal"
                        className={classes.textField}
                        name="password"
                        type='password'
                        value={loginDetails.password}
                        onChange={handleLoginChange}
                        placeholder="password *"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <span className={classes.validation}>{errors.password}</span>
                </div>
                <div>
                    <Button variant="contained" fullWidth onClick={handleSubmit}>login</Button>
                </div>
                <Grid item xs={12} className={classes.linkMargin}>
                    <Link to="/login" className="font-color">forgot password?</Link>
                </Grid>
                <Grid item xs={12} className={classes.links}>
                    <Link to="/login" className="font-color">Don't have an account?
                        &nbsp;<b>Register</b>
                    </Link>
                </Grid>

            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className={classes.dFlex}>
                    <TextField
                        id="outlined-margin-normal"
                        name="firstNameRegister"
                        value={loginDetails.firstNameRegister}
                        onChange={handleLoginChange}
                        className={classes.textField}
                        placeholder="First name*"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <span className={classes.validation}>{errors.firstNameRegister}</span>
                </div>
                <div className={classes.dFlex}>
                    <TextField
                        // label="Normal"
                        id="outlined-margin-normal"
                        name="lastName"
                        value={loginDetails.lastName}
                        onChange={handleLoginChange}
                        className={classes.textField}
                        placeholder="Last name*"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <span className={classes.validation}>{errors.lastName}</span>
                </div>
                <div className={classes.dFlex}>
                    <TextField
                        // label="Normal"
                        id="outlined-margin-normal"
                        name="email"
                        value={loginDetails.email}
                        onChange={handleLoginChange}
                        className={classes.textField}
                        placeholder="Email*"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <span className={classes.validation}>{errors.email}</span>
                </div>
                <div className={classes.dFlex}>
                    <TextField
                        // label="Normal"
                        id="outlined-margin-normal"
                        // defaultValue="email *"
                        className={classes.textField}
                        placeholder="email confirmation*"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <span className={classes.validation}>{errors.emailConfirm}</span>
                </div>
                <div>
                    <Button variant="contained" onClick={handleSubmit} fullWidth>Register</Button>
                </div>
                <Grid item xs={12} className={classes.linkMargin}>
                    <Link to="/login" className="font-color">Already have an account?&nbsp;<b>Login</b></Link>
                </Grid>
                <Grid item xs={12} className={classes.linkSmall}>
                    <Link to="/login" className="font-color">By registering, you accept our Terms of Service and Privacy
                        Policy.
                    </Link>
                </Grid>
            </TabPanel>
        </div>
    );
}
