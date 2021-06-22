import { Container, Grid, Typography, Divider } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import rentFinderImage1 from "../image/rent-finder.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <Grid container >
        <Grid item xs={12} md={4} className="footer-content">
            <Link to="/">
              <img src={rentFinderImage1} alt="rent-finder-logo" width="180" />
            </Link>
            
        </Grid>
        <Grid item xs={12} md={4} className="footer-content">
          <div className="footer-middle-content">
          <Link to="/aboutus">
              <Typography variant="body2" style={{textTransform: 'none'}}>About Us</Typography>
            </Link>
            <Divider orientation="vertical" flexItem  light style={{margin : '0 0.5rem', background: 'white'}} />
            <Link to="/policy">
            <Typography variant="body2" style={{textTransform: 'none'}}>Privacy Policy</Typography>
            </Link>
            <Divider orientation="vertical" flexItem  light style={{margin : '0 0.5rem', background: 'white'}} />
            <Link to="/terms">
            <Typography variant="body2" style={{textTransform: 'none'}}>Terms Of Use</Typography>
            </Link>
            <Divider orientation="vertical" flexItem  light style={{margin : '0 0.5rem', background: 'white'}} />
            <Link to="/cookie">
            <Typography variant="body2" style={{textTransform: 'none'}}>Cookie Policy</Typography>
            </Link>
            <Divider orientation="vertical" flexItem  light style={{margin : '0 0.5rem', background: 'white'}} />
            <Link to="/scams">
            <Typography variant="body2" style={{textTransform: 'none'}}>Scams Alert</Typography>
            </Link>
          </div>
          
        </Grid>
        <Grid item xs={12} md={4} className="footer-content" >
        
          <Typography variant="body1" gutterBottom>Contact : info@rent-finder.de</Typography>
          <div className="footer-icons" >
              <Typography variant="body1" gutterBottom> Social Media :</Typography>
                <a
                  target="_blank"
                  href="https://www.facebook.com/groups/929365913807367"
                >
                  <FacebookIcon />
                </a>
          </div>
        </Grid>
       
        <Grid container item xs={12} className="footer-content">
         <p>Copyright © 2021 Rent-Finder.de, All rightsreserved.</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
