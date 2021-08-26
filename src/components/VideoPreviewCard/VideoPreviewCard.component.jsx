import React from 'react';
import { Link } from 'react-router-dom';

import FavoriteButton from '../FavoriteButton';

import './VideoPreviewCard.styles.css';

function VideoPreviewCard({ id, thumbnailURL, title, kind }) {
  if (kind !== 'youtube#video') return <></>;
  return (
    <div className="VideoPreviewCard">
      <FavoriteButton videoID={id} className="favButton" />
      <Link to={`/view/${id}`}>
        <figure className="VideoPreviewCard-ImageContainer">
          <img className="VideoPreviewCard-Image" src={thumbnailURL} alt={title} />
        </figure>
        <div className="VideoPreviewCard-Details">
          <h3 className="VideoPreviewCard-Title">{title}</h3>
        </div>
      </Link>
    </div>
  );
}

export default VideoPreviewCard;
