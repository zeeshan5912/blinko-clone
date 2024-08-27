import React from 'react';
// import './VideoSection.css';

const VideoSection = () => {
  return (
    <div className="container-fluid px-0 vidSec layered-background" style={{ marginBottom: 100 }}>
      <h1 className="text-center textt">What Is Blink?</h1>
      <div className="section-title-border mb-3"></div>
      <div className="container d-flex justify-content-center align-items-center pt-3 video-container">
        <iframe
          className="full-screen-video"
          src="https://www.youtube.com/embed/DXalbAsBvbM"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="What Is Blink"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
