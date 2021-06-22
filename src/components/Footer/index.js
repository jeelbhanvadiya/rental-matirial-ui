import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";
import FooterLogo from "../../image/footer-logo.png";
import { LinkedIn, Twitter, YouTube } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    textAlign: "center",
    paddingTop: "1rem",
  },
  footerContent: {
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "left",
  },
  footerText: {
    justifyContent: "left",
    textDecoration: "none",
    color: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    }
  },
  footerIcon: {
    marginRight: 5
  }
}));

const FooterText = ({ children, link = "#" }) => {
  const classes = useStyles();
  return (
    <Typography
      variant="subtitle2"
      className={classes.footerText}
      gutterBottom
      component={Link}
      to={link}
    >
      {children}
    </Typography>
  );
};

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <Grid container>
        <Grid item xs={12} md={3} className={classes.footerContent}>
          <Link to="/">
            <img src={FooterLogo} alt="rent-finder-logo" width="180" />
          </Link>
        </Grid>
        <Grid item xs={12} md={3} className={classes.footerContent}>
          <FooterText link="/">Home</FooterText>
          <FooterText>How to Book</FooterText>
          <FooterText>Help</FooterText>
          <FooterText link="/about-us">About</FooterText>
          <FooterText>Refer a Friend</FooterText>
          <FooterText>List Property</FooterText>
        </Grid>
        <Grid item xs={12} md={3} className={classes.footerContent}>
          <FooterText>
            <FacebookIcon className={classes.footerIcon} />
            Facebook
          </FooterText>
          <FooterText>
            <InstagramIcon className={classes.footerIcon} />
            Instagram
          </FooterText>
          <FooterText>
            <Twitter className={classes.footerIcon} />
            Twitter
          </FooterText>
          <FooterText>
            <LinkedIn className={classes.footerIcon} />
            LinkedIn
          </FooterText>
          <FooterText>
            <YouTube className={classes.footerIcon} />
            Youtube
          </FooterText>
        </Grid>
        <Grid item xs={12} md={3} className={classes.footerContent}>
          <FooterText>Terms</FooterText>
          <FooterText>Privacy</FooterText>
          <FooterText>Sitemap</FooterText>
          <FooterText>Contact :</FooterText>
          <FooterText>info@rent-finder.de</FooterText>
        </Grid>

        <Grid container item xs={12} className={classes.footerContent}>
          <small>Copyright © 2021 Rent-Finder.de, All rightsreserved.</small>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
