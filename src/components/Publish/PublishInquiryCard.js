import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Divider, Button, ButtonGroup } from "@material-ui/core";

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

export default function PublishInquiryCard({inquiry, onDelete, onEdit, onPreview}) {
  const classes = useStyles();
  const {title, looking_from} = inquiry;

  return (
      <Paper className="card-content" variant="outlined">
        <Typography className="card-title card_item " variant="h5" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
          {title}
        </Typography>

        <Typography className="card-date card_item"  variant="body1">
          <i className="fas fa-calendar-alt"></i> {looking_from}
        </Typography>

        <Divider />
        <div className={classes.root}>
        <ButtonGroup size="medium" color="primary" variant="text">
        <Button onClick={(id) =>onEdit(inquiry.id)}>Edit</Button>
        <Button onClick={(id) =>onDelete(inquiry.id)}>Delete</Button>
        {/* <Button onClick={(id) =>onPreview(inquiry.id)}>Preview</Button> */}
      </ButtonGroup>
      </div>
      </Paper>
   
  );
}
