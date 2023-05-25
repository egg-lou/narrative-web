import React from 'react'
import cardList from './data';

const Blog = () => {
  return (
    <div className='w-full bg-white py-10 px-2'>
      <h1 className='text-center font-bold text-4xl md: text-2xl'>Narrative Reports</h1>
          <div className='container mx-auto py-8 px-8'>
            <div className='grid lg:grid-cols-4 gap-3 md:grid-cols-2'>
              {cardList.map(card => (
                <div className='shadow-xl rounded-2xl'>
                  <div className='p-3 bg-gray-300 rounded-2xl'>
                    <div>
                  <img src={card.img} alt="" style={{Width:"400px", height: "200px"}} className='rounded-2xl p-0' />
                  </div>
                  <h3 className='flex justify-center font-bold pb-2 pt-4 text-lg'>{card.title}</h3>
                  <p className='flex-auto text-justify font-normal overflow-x-auto'>{card.text}</p>
                  <div className='flex justify-center pb-5 bg-gray-300 pt-7'>
                  <a href= {card.link} className='p-2 px-4 bg-sky-950 rounded-xl text-white hover:bg-orange-500 duration-500'>
                    Read More
                  </a>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  );
}
export default Blog