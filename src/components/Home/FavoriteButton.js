
import {useState, useContext} from 'react';
import FavoriteIcon from "@material-ui/icons/Favorite";
import {FavoriteContext} from "../../context/FavoriteContext";

const FavoriteButton = ({listing}) => {
  const {addFavorite, deleteFavorite, getCounter} = useContext(FavoriteContext)
  const {id} = listing;
  let houseId = (listing.favorite_houses && listing.favorite_houses.length) ? listing.favorite_houses[0].house_id : null;
  const [active, setActive] = useState(id == houseId);

const handleFavoriteClick = () =>{
    setActive(!active);
      if(!active){
        addFavorite(id);
      }
      else{
        deleteFavorite(id);
      }
  }
  
  return (
    <>
      <span className='favoriteContainer favorite-bg-color' onClick={handleFavoriteClick}>
        <FavoriteIcon className={active ? 'active-favorite-btn' : 'inactive-favorite-btn'} />
      </span>
    </>
  );
};

export default FavoriteButton;
