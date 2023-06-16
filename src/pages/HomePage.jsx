import React from 'react'
import Landing from '../components/Landing'
import Blog from '../components/Blog'
import VidSec from '..//components/VideoSection'

const HomePage = () => {
  return (
    <div>
      <Landing />
      <VidSec />
      <Blog />
    </div>
  );
}

export default HomePage