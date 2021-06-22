import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Button,Card, CardHeader, CardContent, CardActions, Collapse, Avatar, Grid, Divider} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import InquiryCardDetail from './InquiryCardDetail';
import {displayDate} from '../../utils/helper'
import { decodeToken } from "../../utils/auth"
import { useHistory } from 'react-router-dom';
 
const useStyles = makeStyles((theme) => ({
  rootCardHeader :{
    paddingBottom : 5
  },
  rootCardContent:{
    padding : "0 16px"
  },
  avatar: {
    backgroundColor: red[500],
  },
  buttonRoot: {
    width: 100,
    textTransform: 'none',
    padding: 0
  }
}));

export default function RecipeReviewCard({inquiry}) {
  const classes = useStyles();
  const history = useHistory();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (e) => {
    decodeToken()  ? setExpanded(!expanded) : history.push('/login')
  };

  return (
    <Card className={classes.root}>
      <CardHeader
      className={classes.rootCardHeader}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {inquiry.user.first_name.charAt(0)+inquiry.user.last_name.charAt(0)}
          </Avatar>
        }
        title={`${inquiry.user.first_name} ${inquiry.user.last_name}`}
      />
      <CardContent className={classes.rootCardContent}>
        <Typography variant="h6"  component="p" style={{ fontSize: "1.2rem", marginBottom:"5px"}}>
          {inquiry.title}
        </Typography>
        <Grid container >
          <Grid container item xs={12}>
          <Typography variant="h3" gutterBottom style={{ fontSize: "1rem", fontWeight: "bold", color: '#d33e03' }}>
                {`${inquiry.city}, `} &nbsp;
          </Typography>
        <Typography variant="body2" gutterBottom>
               {` Looking from ${displayDate(inquiry.looking_from)}`}
          </Typography>
          </Grid>
        </Grid>
        
      </CardContent>
      <CardActions disableSpacing>
      <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  disableElevation
                  className={classes.buttonRoot}
                  onClick={handleExpandClick}
                >
                 {!expanded ? 'Read More' : 'Read Less'}
                </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <InquiryCardDetail inquiry={inquiry}/>
        </CardContent>
      </Collapse>
    </Card>
  );
}
