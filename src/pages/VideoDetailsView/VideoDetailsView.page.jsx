import React from 'react';
import useYoutubeAPI from '../../utils/Hooks/useYoutubeAPI';
import useDebounce from '../../utils/Hooks/useDebounce';
import VideoPreviewCard from '../../components/VideoPreviewCard';

import './VideoDetailsView.styles.css';

function VideoDetailsView({ match }) {
  const mainVideo = useYoutubeAPI('getById', match.params.videoId);
  const relatedVideos = useYoutubeAPI('getRelatedVideos', match.params.videoId);
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
        <div className="VideoDetails">
          <p className="VideoDetails_title">{mainVideo.data.items[0].snippet.title}</p>
          <p className="VideoDetails_description">
            {mainVideo.data.items[0].snippet.description}
          </p>
        </div>
      </div>
      <h2>Related Videos</h2>
      <div className="relatedVideosSection">
        {relatedVideos.loading
          ? 'Loading...'
          : relatedVideos.data.items
              .filter((item) => item.snippet !== undefined)
              .map((item) => (
                <VideoPreviewCard
                  key={item.id.videoId}
                  id={item.id.videoId}
                  thumbnailURL={item.snippet.thumbnails.medium.url}
                  title={item.snippet.title}
                  description={item.snippet.description}
                  kind={item.id.kind}
                />
              ))}
      </div>
    </div>
  );
}

export default VideoDetailsView;
