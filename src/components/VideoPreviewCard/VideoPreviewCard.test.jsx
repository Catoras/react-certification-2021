import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import * as data from '../../mocks/youtubeAPI.json';

import VideoPreviewCard from './index';

describe('VideoPreviewCard', () => {
  const array = data.items;
  const video = array[1];
  const nonVideo = array[0];
  test('renders the title of the video correctly', () => {
    render(
      <VideoPreviewCard
        key={video.id.videoId}
        thumbnailURL={video.snippet.thumbnails.high.url}
        title={video.snippet.title}
        id={video.id.videoId}
        kind={video.kind}
      />
    );
    expect(screen.getByText(video.snippet.title)).toBeInTheDocument();
  });
  test('renders the VideoPreviewCard component with button role', () => {
    render(
      <VideoPreviewCard
        key={video.id.videoId}
        thumbnailURL={video.snippet.thumbnails.high.url}
        title={video.snippet.title}
        id={video.id.videoId}
        kind={video.kind}
      />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('check if the component has the anchor to redirects me the correct youtube video', () => {
    render(
      <VideoPreviewCard
        key={video.etag}
        thumbnailURL={video.snippet.thumbnails.high.url}
        title={video.snippet.title}
        description={video.snippet.description}
        videoID={video.id.videoId}
      />
    );
    expect(screen.getByText(video.snippet.title).closest('Link')).toBeInTheDocument();
  });
  test('test that not render anything if isnt a video', () => {
    render(
      <VideoPreviewCard
        key={nonVideo.etag}
        thumbnailURL={nonVideo.snippet.thumbnails.high.url}
        title={nonVideo.snippet.title}
        id={nonVideo.id.videoId}
        kind={nonVideo.kind}
      />
    );
    const result = screen.queryByText(nonVideo.snippet.title);
    expect(result).not.toBeInTheDocument();
  });
});
