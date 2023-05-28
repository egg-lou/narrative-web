import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogContents'; 
import NotfoundPage from './NotfoundPage';

const BlogPage = () => {
  const { id } = useParams(); 

  const blogPost = blogPosts.find(post => post.id === id);

  return (
    <div className='w-full h-auto bg-white pb-10 pt-10 px-10'>
      {blogPost ? (
        <div className='max-w-screen-lg mx-auto rounded-lg overflow-hidden shadow-2xl bg-gray-300'>
          <div className='font-bold text-4xl text-center'>
            <h2 className='mt-10 mb-6'>{blogPost.title}</h2>
          </div>
          <div className='flex justify-center p-10 mt-3'>
            <img src={blogPost.img1} alt='pic' style={{ width: "100%", maxWidth: "92%", height: "300px", objectFit: "cover" }} className='rounded-lg' />
          </div>
          <div className='text-left text-sm pl-20 font-bold mb-10 -mt-8'>
            <span className='block'>{blogPost.date}</span>
          </div>
          <p className='px-6 sm:px-10 md:px-20 text-justify'>{blogPost.content1}</p>
          <div className='flex justify-center p-10'>
            <img src={blogPost.img2} alt='pic' style={{ width: "100%", maxWidth: "92%", height: "300px", objectFit: "cover" }} className='rounded-lg' />
          </div>
          <p className='px-6 sm:px-10 md:px-20 text-justify pb-20'>{blogPost.content2}</p>
        </div>
      ) : (
        <div>
          <NotfoundPage />
        </div>
      )}
    </div>
  );
};

export default BlogPage;
