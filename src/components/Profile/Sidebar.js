import { List, ListItem, ListItemText, Divider, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const Sidebar = ({onClick}) => {
  
  const classes = useStyles();
  return (
    <>
      <Paper className="paper3-container">
        <List component="nav" className={classes.root}>
          <ListItem button onClick={(e) => onClick("info")}>
            <ListItemText  primary="Personal information" />
          </ListItem>
          <Divider />
          <ListItem button divider onClick={(e) => onClick("contact")}>
            <ListItemText primary="Contact details" />
          </ListItem>
          <ListItem button divider onClick={(e) => onClick("password")}>
            <ListItemText primary="Change password" />
          </ListItem>
          <ListItem button  onClick={(e) => onClick("remove-account")}>
            <ListItemText primary="Remove Account" />
          </ListItem>
        </List>
      </Paper>
    </>
  );
};

export default Sidebar;
