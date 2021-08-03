import axios from 'axios';

const apiKey = 'AIzaSyCl5EvhMOeOTn6K4SgBE2lzNeUsTUtZgfw';
export const youtubeClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    key: apiKey,
  },
});
