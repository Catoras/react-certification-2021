import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { useStore, useDispatch } from '../../store/StoreProvider';
import { types } from '../../store/storeReducer';
import { useAuth } from '../../providers/Auth';

import './FavoriteButton.styles.css';

function FavoriteButton({ videoID, className }) {
  const { authenticated } = useAuth();
  const store = useStore();
  const dispatch = useDispatch();
  const isFav = store.favorites.some((fav) => fav === videoID);

  const starIcon = <FontAwesomeIcon className="fav-icon" icon={faStar} />;
  const starHalfIcon = <FontAwesomeIcon className="fav-icon" icon={faStarHalfAlt} />;

  const handleClick = () => {
    if (isFav) {
      dispatch({ type: types.DELETE_FROM_FAVORITES, payload: videoID });
    } else {
      dispatch({ type: types.ADD_TO_FAVORITES, payload: videoID });
    }
  };

  if (videoID === undefined || !authenticated) return <></>;
  return (
    <button className={className} type="button" onClick={handleClick}>
      {isFav ? starIcon : starHalfIcon}
    </button>
  );
}

export default FavoriteButton;
