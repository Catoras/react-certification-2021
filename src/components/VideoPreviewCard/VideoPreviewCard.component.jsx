import React from 'react';
import { useHistory, Link } from 'react-router';

import './VideoPreviewCard.styles.css';

function VideoPreviewCard({ id, thumbnailURL, title, kind }) {
  const history = useHistory();
  const handleClick = () => history.push(`/view/${id}`);

  if (kind !== 'youtube#video') return <></>;
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link className="VideoPreviewCard" onClick={handleClick} role="button">
      <figure className="VideoPreviewCard-ImageContainer">
        <img className="VideoPreviewCard-Image" src={thumbnailURL} alt={title} />
      </figure>
      <div className="VideoPreviewCard-Details">
        <h3 className="VideoPreviewCard-Title">{title}</h3>
      </div>
    </Link>
  );
}

export default VideoPreviewCard;
