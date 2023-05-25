import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import memberList from '../components/members'
import teamList from '../components/team_leads'

const AboutPage = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full '>
            <div style={{backgroundColor: "rgb(0,84,121)"}} className=''>
            <h1 className='flex justify-center text-justify text-4xl font-bold py-5 text-white'>About Us</h1>
            <p className='flex text-justify mx-12 pb-8 text-white'>
            Lorem ipsum dolor sit amet. Eum odio nemo eos enim quia aut quibusdam nesciunt id dolores reprehenderit cum corporis exercitationem in eveniet accusamus. Et tenetur similique eos minus quos nam numquam voluptatem hic consequuntur molestiae qui architecto adipisci. Et vero optio eos possimus earum ut accusantium velit. Ad aliquid debitis sit pariatur placeat aut eaque praesentium et laboriosam consequuntur rem sunt debitis aut molestiae reprehenderit ut totam atque.
            </p>
            </div>
            <h2 className='bg-black text-white text-center'>BSIT 1 - 4 | COMMITEE</h2>
            <div className='grid grid-cols-2 gap-[0rem] p-8'>
                {memberList.map(member => (
                <div>
                    <div className='flex justify-center'>
                    <img src= {member.picture} style={{width:"120px", height: "120px",}} className='rounded-[50%] object-center'></img>
                    </div>
                    <div className='flex justify-center pt-2'>
                    <h1 className='font-bold'>{member.name}</h1>
                    </div>
                    <div className='flex justify-center p-0.5'>
                    <p className='text-sm text-justify'>{member.role}</p>
                    </div>
                </div>
                ))}
            </div>
                <div className='grid grid-cols-6 gap-[0rem] p-6'>
                    {teamList.map(lead => (
                    <div>
                        <div className='flex justify-center pt-2'>
                        <img src= {lead.picture} style={{width:"120px", height: "120px",}} className='rounded-[50%] object-center'></img>
                        </div>
                        <div className='flex justify-center pt-6'>
                        <h1 className='font-bold'>{lead.name}</h1>
                        </div>
                        <div className='flex justify-evenly p-0.5 text-sm text-center'>
                        <p className=''>{lead.role}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        <div className='bg-rgb(0,84,121'>
            <Footer />
        </div>
    </div>
    
    
  );
}

export default AboutPage