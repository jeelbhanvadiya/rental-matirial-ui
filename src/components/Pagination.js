import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination as MuiPagination } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Pagination({ onChange, page, totalPage }) {
  const classes = useStyles();

  return (
    <>
        <div className={classes.root}>
          <MuiPagination
            count={totalPage}
            variant="outlined"
            color="primary"
            page={page}
            onChange={(e, page) => onChange(e, page)}
          />
        </div>
    </>
  );
}
