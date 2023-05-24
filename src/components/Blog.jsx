import React from 'react'
import cardList from './data';

const Blog = () => {
  return (
    <div className='w-full bg-white py-8 px-2'>
      <h1 className='text-center font-bold text-2xl'>Narrative Reports</h1>
          <div className='container mx-auto py-10 px-8'>
            <div className='grid lg:grid-cols-4 gap-6 md:grid-cols-2 gap-2'>
              {cardList.map(card => (
                <div className='shadow-lg rounded-lg transform transition-transform hover:-translate-y-5 duration-200'>
                  <img src={card.img} alt="" style={{width: "400px", height: "200px"}} />
                  <div className='p-5'>
                  <h3 className='flex justify-center font-bold pb-2 text-lg'>{card.title}</h3>
                  <p className='relative flex-auto text-justify font-normal'>{card.text}</p>
                  </div>
                  <div className='flex justify-center pb-5'>
                  <a href='/' className='p-2  bg-sky-950 rounded text-white hover:bg-orange-500 duration-500'>
                    Read More
                  </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  );
}
export default Blog