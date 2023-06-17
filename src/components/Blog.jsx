import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../data/data';

const BlogList = () => {
  return (
    <div className="w-full bg-white py-10 px-2">
      <h1 className="text-center font-bold text-4xl md:text-2xl">Narrative Reports</h1>
      <div className="container mx-auto py-8 px-8">
        <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2">
          {blogs.map((blog) => (
            <div key={blog.id} className="shadow-xl rounded-2xl overflow-hidden">
              <div className="p-3 bg-gray-300 rounded-2xl h-full flex flex-col justify-between">
                <div className="aspect-w-4 aspect-h-2">
                  <img src={blog.img} alt="" className="object-cover rounded-2xl" />
                </div>
                <div>
                  <h3 className="flex justify-center font-bold pb-2 pt-4 text-lg">{blog.title}</h3>
                  <p className="text-justify font-normal px-6">{blog.text}</p>
                </div>
                <div className="flex justify-center pb-5 bg-gray-300 pt-7">
                  <Link
                    to={blog.link}
                    className="p-2 px-4 bg-sky-950 rounded-xl text-white hover:bg-orange-500 duration-500"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;