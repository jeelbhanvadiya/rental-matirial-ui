import { useContext, useEffect, useState } from "react";
import {makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Button,
  Badge,
} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link, useHistory } from "react-router-dom";
import { decodeToken} from "../../utils/auth";

import FavoriteIcon from "@material-ui/icons/Favorite";
import { AuthContext } from "../../context/AuthContext";
import { FavoriteContext } from "../../context/FavoriteContext";
import { ListingContext } from "../../context/ListingContext";

import rentFinderImage1 from '../../image/rent-finder.png';
import  CookieDialog from '../CookieDialog';
import SubHeader from './SubHeader'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  homeButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    // display: "none",
    // [theme.breakpoints.up("sm")]: {
    //   display: "block",
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navButton: {
    margin: theme.spacing(1),
  },
}));

export default function Header() {
  const classes = useStyles();
  const { onLogout, token} = useContext(AuthContext);
  const { favorite } = useContext(FavoriteContext);
  const {getFavoriteListing} = useContext(ListingContext);
  
  const history = useHistory();
 
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [open, setOpen] = useState(false);
  useEffect( () =>{
      const shouldPopUp = () => !localStorage.getItem('rf_concent');
      if(shouldPopUp()){
        setOpen(true);
      }
  }, [])

  // useEffect( () =>{
  //   if(decodeToken()){
  //     const shouldPopUp = () => !localStorage.getItem('rf_concent');
  //     if(shouldPopUp()){
  //       setOpen(true);
  //     }
  //   }
  // }, [token])

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    handleMenuClose();
    onLogout();
    history.push("/");
  };

  const handleHomeButtonClick = () =>{
    history.push("/");
  }

  const handleEditProfile = () => {
    handleMenuClose();
    history.push("/profile/edit");
  };

  const handleFavorite = () =>{
    history.push("/favorite");
    getFavoriteListing();
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleEditProfile}>Edit Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = decodeToken() ? (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleFavorite}>
        <p style={{textTransform: 'uppercase'}}>My Favorites</p>
      </MenuItem>
      <MenuItem>
        <Link to="/listing">
        <p>Add House</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/inquiry">
          <p>Add Inquiry</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/publish"><p>Publish</p>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <p style={{textTransform: 'uppercase'}}>Profile</p>
      </MenuItem>
    </Menu>
  ) : (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
       
      <MenuItem>
        <Link to="/login">
          <p>Login</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/signup">
          <p>Signup</p>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleFavorite}>
        <p style={{textTransform: 'uppercase'}}>My Favorites</p>
      </MenuItem>
      <MenuItem>
        <Link to="/listing">
        <p>Add House</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/publish"><p>My Publish</p>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      {open && <CookieDialog setOpen={setOpen} open={open}/>}
      <AppBar position="static">
        
        <Toolbar>
          <Link to="/">
             <img className={classes.title}  src={rentFinderImage1} alt="rent-finder-logo" width="180"/>
          </Link>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
                <IconButton onClick={handleFavorite}>
                  <Badge badgeContent={favorite.counter} color="secondary">
                    <FavoriteIcon className="active-favorite-btn" />
                  </Badge>
                </IconButton>
                <Link to="/listing">
                  <Button
                    className={classes.navButton}
                    color="secondary"
                  >
                    Add House
                  </Button>
                </Link>
                <Link to="/inquiry">
                  <Button
                    className={classes.navButton}
                    color="secondary"
                  >
                    Add Inquiry
                  </Button>
                </Link>
                <Link to="/publish/house">
                  <Button
                    className={classes.navButton}
                    variant="text"
                    color="secondary"
                  >
                    My Publish
                  </Button>
                </Link>
                {decodeToken() ? (
                <Button
                  className={classes.navButton}
                  variant="text"
                  color="secondary"
                  variant="outlined"
                  onClick={handleProfileMenuOpen}
                >
                  Profile  
                </Button>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    className={classes.navButton}
                    variant="outlined"
                    color="secondary"
                  >
                    Login
                  </Button>
                </Link>

                <Link to="/signup">
                  <Button
                    className={classes.navButton}
                    variant="text"
                    color="secondary"
                    disableRipple
                  >
                    Signup
                  </Button>
                </Link>
              </>
            )}
          </div>
          <div className={classes.sectionMobile}>
           
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
        <SubHeader />        
    </div>
  );
}
