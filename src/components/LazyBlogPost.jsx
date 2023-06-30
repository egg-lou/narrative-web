import React from 'react';

const LazyBlogPost = ({ blogPost }) => {
  return (
    <div className='flex flex-col justify-center items-center mx-4 my-2 md:mx-8 lg:mx-8 md:my-4 lg:my-4 text-black font-abc tracking-wide text-justify text-xs lg:text-lg md:text-lg'>
      <img src={blogPost.img1} alt='Img' className='mb-2 rounded-lg aspect-w-4 aspect-h-2'/>
      <p className='mb-6 mt-4 indent-10'>{blogPost.content1}</p>
      {blogPost.content2 && <p className=' indent-10'>{blogPost.content2}</p>}
      {blogPost.img2 && <img src={blogPost.img2} alt='Img' className='img my-4 rounded-lg' />}
      {blogPost.content3 && <p className='mb-6 indent-10'>{blogPost.content3}</p>}
      {blogPost.content4 && <p className='mb-2 indent-10'>{blogPost.content4}</p>}
      {blogPost.img3 && <img src={blogPost.img3} alt='Img' className='img my-4 rounded-lg' />}
      {blogPost.content5 && <p className='mb-6 indent-10'>{blogPost.content5}</p>}
      {blogPost.content6 && <p className='mb-6 indent-10'>{blogPost.content6}</p>}
      {blogPost.img4 && <img src={blogPost.img4} alt='Img' className='img mb-2 rounded-lg' />}
    </div>
  );
};

export default LazyBlogPost;
