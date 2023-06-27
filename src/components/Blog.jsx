import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../data/data';
import secbg from '../images/temp2.png'

const BlogList = () => {
  return (
    // <div
    //   className="w-full h-screen bg-cover bg-no-repeat bg-fixed"
    //   style={{ backgroundImage: `url(${secbg})` }}
    // >
    //   <div>
    //     <div className='container mx-auto'>
    //       <div className='grid grid-cols-3 justify-self-end items-center'>
    //       {blogs.map((blog) => (   
    //           <div key={blog.id} className=" overflow-hidden">
    //             <div className="p-3 bg-gray-300 rounded-2xl w-80 h-auto flex flex-col justify-between">
    //               <div className="aspect-w-2 aspect-h-1">
    //                 <img src={blog.img} alt="" className="object-cover rounded-2xl" />
    //               </div>
    //               <div>
    //                 <h3 className="flex justify-center font-bold pb-2 pt-4 text-lg">{blog.title}</h3>
    //                 <p className="text-justify font-normal px-6">{blog.text}</p>
    //               </div>
    //               <div className="flex justify-center pb-5 bg-gray-300 pt-7">
    //                 <Link
    //                   to={blog.link}
    //                   className="p-2 px-4 bg-sky-950 rounded-xl text-white hover:bg-orange-500 duration-500"
    //                 >
    //                   Read More
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div> 
  // <div className='w-full h-full'>
  //    <div
  //     className="w-full h-screen bg-cover bg-no-repeat"
  //     style={{ backgroundImage: `url(${secbg})` }}
  //   >
  //     <div className='grid place-content-center'>
  //       <div className='w-96 h-56 bg-black border m-auto'>Child

  //       </div>
  //     </div>
  //   </div>
  // </div>
<div style={{width: 'full', height:'68vh'}}>
  <div
    className="w-full h-full bg-cover bg-no-repeat bg-fixed flex items-center justify-end"
    style={{ backgroundImage: `url(${secbg})` }}
  >
    <div className="container w-3/5 h-80 mx-6 p-2 -mt-24">
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className='overflow-hidden rounded-lg'>
              <div className='w-full h-full bg-white border-8 border-[#B56CCA]'>
                <div className='aspect-w-4 aspect-h-2 flex justify-center'>
                  <img src={blog.img} alt='display' className='p-2' style={{width: '380px', height:'190px'}}/>
                </div>
                <div className='flex flex-col justify-center p-4 -mt-4'>
                  <h3 className='font-bold text-center -mb-4'>{blog.title}</h3>
                  <p className='text-justify text-xs mt-6'>{blog.text}</p>
                  <div className='bg-[#4B3D72] flex justify-center rounded-lg m-4'>
                  <Link
                      to={blog.link}
                      className=" text-white"
                    >
                      Read More
                    </Link>
                    </div>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  );
};

export default BlogList;