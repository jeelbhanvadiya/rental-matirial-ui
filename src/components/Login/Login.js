import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import TextField from '@material-ui/core/TextField';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Controls from "../controls/Controls";
import {Grid, Button} from "@material-ui/core";
import logo from '../../image/logo.png';
import back from '../../image/back.png'
import {Link} from "react-router-dom";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div className="form_container">
            {/*<div className="form_content">*/}
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
    textField: {
        width: '300px',
        fontSize: '14px'
    },
    backHome: {
        paddingLeft: '50px',
        fontSize: '16px',
        color: '#072C50'
    }
}));

export default function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div className={classes.backHome}>
                <img src={back} alt='back' height='10'  style={{paddingRight: '5px'}}/>
                back to home
            </div>
            <div className="form_container">
                <img src={logo} alt="logo" width='250' style={{padding: '18px'}}/>
            </div>
            {/*<div className="container_cover"></div>*/}
            <div className="form_container">
                {/*<AppBar position="static">*/}
                <Tabs
                    // variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <LinkTab label="login" href="/drafts" {...a11yProps(0)} />
                    <LinkTab label="Sign up" href="/trash" {...a11yProps(1)} />
                </Tabs>
                {/*</AppBar>*/}
            </div>
            <TabPanel value={value} index={0}>
                <div>
                    <TextField
                        // label="Normal"
                        id="outlined-margin-normal"
                        // defaultValue="email *"
                        className={classes.textField}
                        placeholder="Email *"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        // label="Normal"
                        id="outlined-margin-normal"
                        // defaultValue="email *"
                        className={classes.textField}
                        placeholder="password *"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                </div>
                <div>
                    <Button variant="contained" fullWidth>login</Button>
                </div>
                <Grid item xs={12} className={classes.links} style={{marginTop: '20px'}}>
                    <Link to="/login" className="font-color">forgot password?</Link>
                </Grid>
                <Grid item xs={12} className={classes.links}>
                    <Link to="/login" className="font-color">Don't have an account?
                        &nbsp;<b>Register</b>
                    </Link>
                </Grid>

            </TabPanel>
            <TabPanel value={value} index={1}>
                <div>
                    <TextField
                        // label="Normal"
                        id="outlined-margin-normal"
                        // defaultValue="email *"
                        className={classes.textField}
                        placeholder="First name*"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        // label="Normal"
                        id="outlined-margin-normal"
                        // defaultValue="email *"
                        className={classes.textField}
                        placeholder="Last name*"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        // label="Normal"
                        id="outlined-margin-normal"
                        // defaultValue="email *"
                        className={classes.textField}
                        placeholder="Email*"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                </div>
                <div>
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
                </div>
                <div>
                    <Button variant="contained" fullWidth>Register</Button>
                </div>
                <Grid item xs={12} className={classes.links} style={{marginTop: '20px'}}>
                    <Link to="/login" className="font-color">Already have an account?&nbsp;<b>Login</b></Link>
                </Grid>
                <Grid item xs={12} className={classes.links} style={{fontSize: '10px'}}>
                    <Link to="/login" className="font-color">By registering, you accept our Terms of Service and Privacy
                        Policy.
                    </Link>
                </Grid>
            </TabPanel>
        </div>
    );
}
