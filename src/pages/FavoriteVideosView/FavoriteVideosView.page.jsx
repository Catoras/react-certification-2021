import React from 'react';

import VideoPreviewCard from '../../components/VideoPreviewCard';

import useYoutubeAPI from '../../utils/Hooks/useYoutubeAPI';
import useDebounce from '../../utils/Hooks/useDebounce';
import { useStore } from '../../store/StoreProvider';
import './FavoriteVideosView.styles.css';

function FavoriteVideosView() {
  const store = useStore();
  const favVideos = store.favorites.slice(0, 10);
  const query = favVideos.join(',');
  const { data, loading, error, fetchData } = useYoutubeAPI('getById', query);
  useDebounce(
    () => {
      fetchData();
    },
    [],
    1
  );

  if (favVideos.length === 0) return <div>You don´t have favorite videos...</div>;
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
          isFavorite
        />
      ))}
    </section>
  );
}

export default FavoriteVideosView;
