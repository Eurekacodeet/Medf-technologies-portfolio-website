import React, { useEffect, useRef } from 'react';

const YoutubePlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          showinfo: 0,
        },
        events: {},
      });
    };
  }, [videoId]);

  return <div id="youtube-player" />;
};

export default YoutubePlayer;
