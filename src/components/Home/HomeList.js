import { useContext, useEffect, useState } from "react";
import {
  Grid,
  Container,
  Typography,
  useMediaQuery 
} from "@material-ui/core";
import HomeCard from "./HomeCard";
import { ListingContext } from "../../context/ListingContext";
import { FavoriteContext } from "../../context/FavoriteContext";
import Loader from "../Loader";
import Controls from "../controls/Controls";
import { POST_PER_PAGE } from "../../utils/constants";
import { useLocation } from "react-router-dom";
import Pegination from "../../components/Pagination";
import {ScrollUp} from '../../utils/helper';
import {Helmet} from 'react-helmet'
const HomeList = () => {
  const { getListing, state} = useContext(ListingContext);
  const { favorite, resetFavorite, getCounter } = useContext(FavoriteContext);
  const location = useLocation();
  const [openAlert, setOpenAlert] = useState(false);
  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * POST_PER_PAGE;
  const selectedHouse = state.houseDatas.slice(startIndex,startIndex + POST_PER_PAGE);
  const matches = useMediaQuery(theme => theme.breakpoints.up('sm'));

  const HandlePage = (e, page) => {
    setPage(page);
    if(matches) ScrollUp(400)
    else ScrollUp();
  };

  useEffect(() => {
    getCounter();
    return () => {
      resetFavorite();
    };
  }, []);

  useEffect(() => {
    if (location.pathname == "/") getListing();
    setPage(1);
  }, [location.pathname]);

  useEffect(() => {
    setOpenAlert(true);
  }, [favorite.success, favorite.counter]);

  const setError = () => {
    return (
      <div className="card-message-container">
        <Typography variant="body1">{state.error}</Typography>
      </div>
    );
  };

  const dispalyArticle = () => {
    if (state.fetching) {
      return <Loader />;
    } else if (state.error) {
      return setError();
    } else {
      return selectedHouse.map((data) => {
        return (
          <Grid key={data.id} item sm={12} md={4}>
            <HomeCard listing={data} />
          </Grid>
        );
      });
    }
  };

  return (
    <>
      <Container maxWidth="md" style={{ minHeight: "calc(100vh - 128px)"}}>
        <Grid container spacing={3}>
          {dispalyArticle()}
        </Grid>
      </Container>
      <Grid item xs={12} className="pagination-container">
        <Pegination onChange={HandlePage} page={page} totalPage={state.totalPage}/>
      </Grid>
      {favorite.success && (
        <Controls.AlertMessage
          message={favorite.success}
          open={openAlert}
          setOpen={setOpenAlert}
        />
      )}
    </>
  );
};

export default HomeList;
