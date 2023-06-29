import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../data/data';
import secbg from '../images/temp2.png';

const BlogList = () => {
  return (
    <div>
      <div
        className="w-full lg:h-[68vh] md:h-auto sm:h-screen bg-cover bg-no-repeat bg-fixed flex items-center lg:justify-end md:justify-center sm:justify-center"
        style={{ backgroundImage: `url(${secbg})` }}
      >
        <div className="container lg:w-3/5 sm:w-full mx-1 lg:mx-6 p-2 lg:-mt-24 sm:py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 px-3 py-8 lg:py-0">
            {blogs.map((blog) => (
              <div key={blog.id} className="overflow-hidden rounded-lg mt-0 lg:mt-24">
                <div className="cards w-full h-full bg-white border-8 border-[#B56CCA]">
                  <div className="aspect-w-4 aspect-h-2 flex justify-center">
                    <img
                      src={blog.img}
                      alt="display"
                      className="p-2"
                      style={{ width: '380px', height: '190px' }}
                    />
                  </div>
                  <div className="flex flex-col justify-center p-4 -mt-4">
                    <h3 className="font-bold font-abc text-center -mb-4">{blog.title}</h3>
                    <p className="text-justify font-abc text-xs mt-6">{blog.text}</p>
                  </div>
                  <div className="bg-[#4B3D72] flex justify-center rounded-2xl mx-20 lg:mx-8 md:mx-8 mt-2 mb-5 hover:bg-white border-2 border-[#4B3D72] text-white hover:text-[#4B3D72] duration-500" >
                      <Link to={blog.link} className="p-1 font-abc">
                        Read More
                      </Link>
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