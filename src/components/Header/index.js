import { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Badge,
  Typography,
  useTheme,
} from "@material-ui/core";
import { NavLink as Link, useHistory } from "react-router-dom";

import FavoriteIcon from "@material-ui/icons/FavoriteOutlined";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

import rentFinderImage1 from "../../image/rent-finder.png";

import { Drawer } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    [theme.breakpoints.up("sm")]: {
      alignItems: "center",
      flexDirection: "row",
    },
  },
  navItem: {
    textDecoration: "none",
    margin: theme.spacing(1),
    color: theme.palette.common.black,
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  header: {
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  drawer: {
    width: 200,
  },
  logo: {
    padding: 10,
    width: "100%",
    textAlign: "center",
  },
}));

export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const headerMedia = useMediaQuery(theme.breakpoints.up("sm"));

  const [openMenu, setOpenMenu] = useState(false);

  const handleFavorite = () => {
    history.push("/favorite");
  };

  const menuItems = (
    <div className={[classes.menu, openMenu ? classes.drawer : null].join(" ")}>
      {!headerMedia && (
        <div className={classes.logo}>
          <img
            className={classes.title}
            src={rentFinderImage1}
            alt="rent-finder-logo"
            width="120"
          />
        </div>
      )}
      <Badge badgeContent={0} color="secondary">
        <IconButton onClick={handleFavorite}>
          <FavoriteIcon htmlColor="red" />
        </IconButton>
      </Badge>
      <Typography className={classes.navItem} component={Link} to="/listing">
        Add House
      </Typography>
      <Typography className={classes.navItem} component={Link} to="/inquiry">
        Add Inquiry
      </Typography>
      <Typography
        className={classes.navItem}
        component={Link}
        to="/publish/house"
      >
        My Publish
      </Typography>

      {false ? (
        <Button
          className={classes.navButton}
          color="secondary"
          variant="outlined"
          onClick={() => {}}
        >
          Profile
        </Button>
      ) : (
        <>
          <Typography className={classes.navItem} component={Link} to="/login">
            Login
          </Typography>
          <Typography className={classes.navItem} component={Link} to="/signup">
            Signup
          </Typography>
        </>
      )}
    </div>
  );

  return (
    <div>
      {/* {open && <CookieDialog setOpen={setOpen} open={open} />} */}
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.header}>
          <Link to="/">
            <img
              className={classes.title}
              src={rentFinderImage1}
              alt="rent-finder-logo"
              width="180"
            />
          </Link>

          <div className={classes.grow} />

          {headerMedia ? (
            <Fragment>{menuItems}</Fragment>
          ) : (
            <IconButton onClick={() => setOpenMenu(true)}>
              <MenuRoundedIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor={"right"}
        open={openMenu}
        onClose={() => setOpenMenu(false)}
      >
        {menuItems}
      </Drawer>

      
    </div>
  );
}
