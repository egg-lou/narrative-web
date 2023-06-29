import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogContents';
import NotfoundPage from './NotfoundPage';

const BlogPage = () => {
  const { id } = useParams();

  const blogPost = blogPosts.find((post) => post.id === id);

  if (!blogPost) {
    return (
      <div>
        <NotfoundPage />
      </div>
    );
  }

  const renderContent = () => {
    return (
      <div className='w-full min-h-screen bg-[#524781] flex justify-center'>
        <div className='flex flex-col justify-center items-center py-10 px-4 md:px-6 lg:px-6'>
          <div className='w-full h-auto bg-white'>
          <div className='flex flex-col justify-center items-center mt-10 text-black'>
            <h3 className='text-2xl lg:text-5xl md:text-5xl font-bold mb-4 font-abc'>{blogPost.title}</h3>
            <h1 className='text-xl font-bold mb-2'>{blogPost.date}</h1>
          </div>
          <div className='flex flex-col justify-center items-center mx-4 my-2 md:mx-8 lg:mx-8 md:my-4 lg:my-4 text-black font-abc tracking-wide text-justify text-xs lg:text-lg md:text-lg'>
              <img src={blogPost.img1} alt='Img' className='mb-2' />
              <p className='mb-6 mt-10 indent-10'>{blogPost.content1}</p>
              {blogPost.content2 && <p className='mb-6 indent-10'>{blogPost.content2}</p>}
              {blogPost.img2 && <img src={blogPost.img2} alt='Img' className='img my-10' />}
              {blogPost.content3 && <p className='mb-6 indent-10'>{blogPost.content3}</p>}
              {blogPost.content4 && <p className='mb-6 indent-10'>{blogPost.content4}</p>}
              {blogPost.img3 && <img src={blogPost.img3} alt='Img' className='img my-10' />}
              {blogPost.content5 && <p className='mb-6 indent-10'>{blogPost.content5}</p>}
              {blogPost.content6 && <p className='mb-6 indent-10'>{blogPost.content6}</p>}
              {blogPost.img4 && <img src={blogPost.img4} alt='Img' className='img my-10' />}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div>{renderContent()}</div>;
};

export default BlogPage;
