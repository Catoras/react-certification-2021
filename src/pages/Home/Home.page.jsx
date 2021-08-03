import React from 'react';

import VideoPreviewCard from '../../components/VideoPreviewCard';

import useYoutubeAPI from '../../utils/Hooks/useYoutubeAPI';
import useDebounce from '../../utils/Hooks/useDebounce';
import './Home.styles.css';

function HomePage() {
  const { data, loading, error, fetchData } = useYoutubeAPI('mostPopular');
  useDebounce(
    () => {
      fetchData();
    },
    [],
    1
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <section className="homepage">
      {data.items.map((item) => (
        <VideoPreviewCard
          key={item.id}
          id={item.id}
          thumbnailURL={item.snippet.thumbnails.high.url}
          title={item.snippet.title}
          kind={item.kind}
        />
      ))}
    </section>
  );
}

export default HomePage;
