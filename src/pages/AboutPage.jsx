import React from 'react';
import leadList from '../data/leads';


const Card = ({ picture, name, role }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-md shadow bg-slate-400">
      <div className="flex justify-center">
        <img src={picture} style={{ width: '120px', height: '120px' }} className="rounded-[50%] object-center" alt={name} />
      </div>
      <div className="flex justify-center pt-2">
        <h1 className="font-bold">{name}</h1>
      </div>
      <div className="flex justify-center p-0.5">
        <p className="text-sm text-center mx-4">{role}</p>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div>
      <div className="w-full ">
        <div style={{ backgroundColor: "rgb(0,84,121)" }}>
          <h1 className="flex justify-center text-justify text-4xl font-bold py-5 text-white">About Us</h1>
          <p className="flex text-justify mx-12 pb-8 text-white">
            Lorem ipsum dolor sit amet. Eum odio nemo eos enim quia aut quibusdam nesciunt id dolores reprehenderit cum corporis exercitationem in eveniet accusamus. Et tenetur similique eos minus quos nam numquam voluptatem hic consequuntur molestiae qui architecto adipisci. Et vero optio eos possimus earum ut accusantium velit. Ad aliquid debitis sit pariatur placeat aut eaque praesentium et laboriosam consequuntur rem sunt debitis aut molestiae reprehenderit ut totam atque.
          </p>
        </div>
        <h2 className="bg-black text-white text-center">BSIT 1 - 4 | COMMITTEE</h2>
          <div className="grid grid-cols-2 gap-4 p-6 bg-white">
            {leadList.slice(0, 2).map((lead) => (
              <Card
                key={lead.name}
                picture={lead.picture}
                name={lead.name}
                role={lead.role}
              />
            ))}
          </div>
        <div className="bg-white grid grid-cols-2 gap-2  p-6 md:grid-cols-4 md:gap-4 lg:grid-cols-6 lg:gap-4">
          {leadList.slice(2).map(lead => (
            <Card
              key={lead.name}
              picture={lead.picture}
              name={lead.name}
              role={lead.role}
            />
          ))}
        </div>
      </div>
      <div className="bg-rgb(0,84,121"></div>
    </div>
  );
};

export default AboutPage;
