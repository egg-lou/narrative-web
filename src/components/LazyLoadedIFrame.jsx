import React from 'react';

const LazyLoadedIFrame = () => (
  <iframe
    title="Embedded Video"
    src="https://www.youtube.com/embed/LYRB4itwciU?rel=0"
    width="100%"
    height={window.innerWidth < 1024 ? "72" : "96"}
    allow="fullscreen; accelorometer; encrypted-media; gyroscope"
    className={window.innerWidth < 1024 ? "h-72" : "h-96"}
  ></iframe>
);


export default LazyLoadedIFrame;
