import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Chip, Divider, Button, ButtonGroup } from "@material-ui/core";

import {displayDate} from '../../utils/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

export default function ListingCard({listing, onDelete, onEdit, onPreview}) {
  const classes = useStyles();
  const {street_name, street_number, city, post_code, rent} = listing;
  const location = street_name +(street_number ? " " + street_number : "") + ", " +city + " " +post_code;
  const rentInEuro = rent+'€'
  return (
      <Paper className="card-content" variant="outlined">
        <Typography className="card-title card_item" variant="h6">
          {location}
        </Typography>

        <Typography className="card-date card_item"  variant="body1">
          <i className="fas fa-calendar-alt"></i> {displayDate(listing.available_from)}
        </Typography>
        <div className="card_item">
          <Chip className="chip-style" color="primary" label={rentInEuro} />
        </div>

        <Divider />
        <div className={classes.root}>
        <ButtonGroup size="medium" color="primary" variant="text">
        <Button onClick={(id) =>onEdit(listing.id)}>Edit</Button>
        <Button onClick={(id) =>onDelete(listing.id)}>Delete</Button>
        <Button onClick={(id) =>onPreview(listing.id)}>Preview</Button>
      </ButtonGroup>
      </div>
      </Paper>
   
  );
}
