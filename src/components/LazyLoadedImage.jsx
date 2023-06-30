import React from 'react';

const LazyLoadedImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="p-2" />
);

export default LazyLoadedImage;
