import { makeStyles } from "@material-ui/core/styles";
import FavoriteButton from "./FavoriteButton";
import { Typography, Button, List, ListItem , Grid} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import { placeType } from "../../data/listingData";
import { decodeToken, displayDate } from "../../utils/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    cursor: "pointer",
  },
  header: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
  },
  listRoot: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  listButton:{
    paddingTop: 1,
    paddingBottom: 1,
  },
buttonRoot: {
  width: '80%',
  marginBottom: 10,
}
}));

export default function HomeCard({ listing }) {
  const { id, pictures } = listing;
  const classes = useStyles();
  const history = useHistory();

  const [{ option }] = Object.values(placeType).filter(
    (item) => item.id == listing.type
  );

  const handledDetail = () => {
    decodeToken()  ? history.push(`room/${id}`) : history.push('/login')
  };
  return ( 
    <>
      <div className="paper5-container">
        <Grid container>
          <Grid item xs={12}>
          <div className={classes.root}>
          <ImageSlider onClick={handledDetail} pictures={pictures} />
          {decodeToken() && <FavoriteButton listing={listing} />}
        </div>
          </Grid>
          {/* <Grid container item xs >
          <Typography variant="body2"  style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', paddingLeft: '16px'}}>
            {listing.title}
          </Typography>
          </Grid> */}
          <Grid container item xs={12} >
            {/* <Grid item xs={12}>
              <Typography variant="body2" style={{padding:"10px 20px 0 20px", fontWeight:"500",  color: '#012f53',  maxWidth:"75vw", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
              {listing.title}
              </Typography>
            </Grid> */}
            <Grid item xs={12}>
            <div className={classes.header}>
            <List>
              <ListItem classes={{ root: classes.listRoot }}>
              <Typography variant="h3" gutterBottom style={{ fontSize: "1rem", fontWeight: "bold", color: '#d33e03' }}>
                {listing.city}
              </Typography>
            </ListItem>
            <ListItem classes={{ root: classes.listRoot }}>
              <Typography
                variant="h3"
               color="primary"
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                gutterBottom
              >
                €{listing.rent}
              </Typography>
              <Typography
                variant="caption"
                style={{ fontSize: "0.8rem" }}
                gutterBottom
              >
                /Month
              </Typography>
            </ListItem>

            <ListItem classes={{ root: classes.listRoot }}>
              {listing.total_size ? <Typography variant="body2" >
                {option} <span className="point-container">•</span>{" "}
                {listing.total_size} m²<span className="point-container">•</span>
                {" "}{displayDate(listing.available_from)}
              </Typography> : <Typography variant="body2" >
                {option} <span className="point-container">•</span>{" "}
                {" "}{displayDate(listing.available_from)}
              </Typography>} 
            </ListItem>
          </List>
            </div> 

            </Grid>


          
          </Grid>
           <Grid container item xs 
                  direction="row"
                  justify="center">
            <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  disableElevation
                  classes={{root: classes.buttonRoot}}
                  onClick={handledDetail}
                >
                  Read More
                </Button>
            </Grid>
          
        </Grid>
        </div>
    </>
  );
}
