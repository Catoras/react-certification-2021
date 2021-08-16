import React from 'react';

import VideoPreviewCard from '../../components/VideoPreviewCard';

import useYoutubeAPI from '../../utils/Hooks/useYoutubeAPI';
import useDebounce from '../../utils/Hooks/useDebounce';
import './Search.styles.css';

function Search({ match }) {
  const { data, loading, error, fetchData } = useYoutubeAPI(
    'getByName',
    match.params.query
  );
  useDebounce(
    () => {
      fetchData();
    },
    [match.params.query],
    1
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <section className="searchPage">
      {loading
        ? 'Loading...'
        : data.items
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
    </section>
  );
}

export default Search;
