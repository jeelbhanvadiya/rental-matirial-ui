import {Typography} from '@material-ui/core'
import {makeStyles } from "@material-ui/core/styles";
import { useLocation, NavLink } from "react-router-dom";
import CitySearchbar from "../CitySearchbar";

const useStyles = makeStyles((theme) => ({
    search: {
      padding: theme.spacing(0),
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      border: "3px solid #012f53",
      backgroundColor: 'white',
      "&:hover": {
        border: "3px solid #012f53"
      },
      width: 250,
      margin: 'auto',
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(0.5),
        width: 350,
      },
    },
  }));

const SubHeader = () => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <>
        {(location.pathname == "/"  || location.pathname == "/city" ||location.pathname == "/inquiry-list" || location.pathname == "/inquiry-list/city") && (
        <div className="homePageContent">
            <section className="searchWrap">
                <Typography variant="h3"  className="mainTitle">Global Rental Platform for Indians</Typography>
                <Typography variant="h5" className="subTitle">Make a Right Move</Typography>
                <div className={classes.search}>
                   <CitySearchbar pathname={location.pathname}/>
                </div>
                <div className="header-listing-button">
                  <NavLink  exact to="/"  className= {location.pathname == "/city" ? "navBtn city" : "navBtn"} >House List</NavLink>
                  <NavLink to="/inquiry-list" className="navBtn">Inquiry List</NavLink>
                </div>
            </section>
            <div className="homePageImage" />
        </div>
        )}
        </>
       
    )
}

export default SubHeader
