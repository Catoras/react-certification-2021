import React from 'react';
import useYoutubeAPI from '../../utils/Hooks/useYoutubeAPI';
import useDebounce from '../../utils/Hooks/useDebounce';
import VideoPreviewCard from '../../components/VideoPreviewCard';
import FavoriteButton from '../../components/FavoriteButton';
import { useStore } from '../../store/StoreProvider';

import './VideoDetailsView.styles.css';

function VideoDetailsView({ match, fromFavorite }) {
  const mainVideo = useYoutubeAPI('getById', match.params.videoId);
  const store = useStore();
  const favVideos = store.favorites
    .filter((videoId) => videoId !== match.params.videoId)
    .slice(0, 10);
  const query = fromFavorite ? favVideos.join(',') : match.params.videoId;
  const relatedVideos = useYoutubeAPI(
    fromFavorite ? 'getById' : 'getRelatedVideos',
    query
  );

  useDebounce(
    () => {
      mainVideo.fetchData();
      relatedVideos.fetchData();
    },
    [match.params.videoId],
    1
  );

  if (mainVideo.loading) return <div>Loading...</div>;
  if (mainVideo.error) return <div>Error</div>;
  return (
    <div className="container">
      <div className="videoSection">
        <iframe
          src={`https://www.youtube.com/embed/${match.params.videoId}`}
          frameBorder="0"
          allowFullScreen
          title="YouTube video player"
          width="100%"
          height="500px"
        />
        <FavoriteButton videoID={match.params.videoId} className="favButtonBig" />
        <div className="VideoDetails">
          <p className="VideoDetails_title">{mainVideo.data.items[0].snippet.title}</p>
          <p className="VideoDetails_description">
            {mainVideo.data.items[0].snippet.description}
          </p>
        </div>
      </div>
      <h2>{fromFavorite ? 'Favorite Videos' : 'Related Videos'}</h2>
      <div className="relatedVideosSection">
        {relatedVideos.loading
          ? 'Loading...'
          : relatedVideos.data.items
              .filter((item) => item.snippet !== undefined)
              .map((item) => (
                <VideoPreviewCard
                  key={fromFavorite ? item.id : item.id.videoId}
                  id={fromFavorite ? item.id : item.id.videoId}
                  thumbnailURL={item.snippet.thumbnails.medium.url}
                  title={item.snippet.title}
                  description={item.snippet.description}
                  kind={fromFavorite ? item.kind : item.id.kind}
                  isFavorite={fromFavorite}
                />
              ))}
      </div>
    </div>
  );
}

export default VideoDetailsView;
