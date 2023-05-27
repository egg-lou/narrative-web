import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogContents'; 

const BlogPage = () => {
  const { id } = useParams(); 

  const blogPost = blogPosts.find(post => post.id === id);


  return (
    <div className='w-full h1/2 bg-white -mt-24'>
      {blogPost ? (
        <div>
          <img src={blogPost.img1} alt='pic'/>
          <h2>{blogPost.title}</h2>
          <p>{blogPost.content1}</p>
          <img src={blogPost.img2} alt='pic'/>
          <p>{blogPost.content2}</p>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center -space-y-20'>
      <div className='flex justify-center'>
        <img src='/LOGO.png' alt='404 ERROR' className='max-w-full' />
      </div>
      <div className='font-bold lg:text-4xl text-center md: text-2xl'>
        <p className='py-4 text-black'>404 BLOG POST NOT FOUND</p>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .flex-col {
              padding: 20px;
            }
            .text-4xl {
              font-size: 2rem;
            }
            .py-8 {
              padding-top: 4rem;
              padding-bottom: 4rem;
            }
          }
        `}
      </style>
    </div>
        
      )}
    </div>
  );
};

export default BlogPage;