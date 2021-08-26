import { useState } from 'react';

import { youtubeClient } from '../helpers';

const useYoutubeAPI = (typeOfQuery = 'mostPopular', query = '') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      let response;
      if (typeOfQuery === 'mostPopular') {
        response = await youtubeClient('/videos', {
          params: {
            part: 'snippet',
            chart: 'mostPopular',
            regionCode: 'MX',
            maxResults: 10,
            pageToken: '',
          },
        });
      } else if (typeOfQuery === 'getByName' && query.length > 0) {
        response = await youtubeClient('/search', {
          params: {
            type: 'video',
            part: 'snippet',
            maxResults: 10,
            q: query,
          },
        });
      } else if (typeOfQuery === 'getById') {
        response = await youtubeClient('/videos', {
          params: {
            part: 'snippet,statistics',
            id: query,
          },
        });
      } else if (typeOfQuery === 'getRelatedVideos') {
        response = await youtubeClient('/search', {
          params: {
            part: 'snippet',
            relatedToVideoId: query,
            maxResults: 10,
            type: 'video',
          },
        });
      }
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return {
    data,
    loading,
    error,
    fetchData,
  };
};

export default useYoutubeAPI;
