import './App.css';
import { IoIosMail } from 'react-icons/io';
import { FaFacebook, FaYoutube, FaSpotify } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { BsTwitterX } from 'react-icons/bs';
import { SiApplemusic } from 'react-icons/si';
import { AiFillTikTok } from 'react-icons/ai';
import { motion } from 'motion/react';
import { Meteors } from './components/meteors';
import { Input } from './components/input';
import { Button } from './components/moving-border';
import { LayoutTextFlip } from './components/layout-text-flip';
import { ContainerTextFlip } from './components/container-textFlip';
import { LinkPreview } from './components/link-preview';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

function App() {
 const [email, setEmail] = useState('');
 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(email);

  const serviceId = 'service_vnavbdb';
  const templateId = 'template_sst042c';
  const publicKey = 'BilGCLyaQTOLgXmNr';

  const templateParam = {
   from_email: email,
  };

  emailjs
   .send(serviceId, templateId, templateParam, publicKey)
   .then((response) => {
    console.log('Email sent successfully', response);
    toast.success('Thank you for subscribing');
    setEmail('');
   })
   .catch((error) => {
    console.error('Error sending email', error);
    toast.error('Something went wrong. Please try again !');
   });
 };
 return (
  <>
   <div
    className='bg-[url(./assets/bg1.png)] bg-cover bg-center bg-black/40 bg-blend-overlay md:bg-none 
   md:bg-secondary-white min-h-screen overflow-y-auto scroll-smooth '
   >
    <div className='relative grid grid-cols-1 md:grid-cols-2 min-h-screen overflow-hidden'>
     <div className='text-secondary-white md:text-primary-black flex flex-col justify-center items-center overflow-y-auto p-5'>
      {/* heading */}
      <Meteors number={20} className='absolute inset-0  ' />

      <h1 className='z-10 uppercase text-3xl md:text-5xl text-center font-playfair font-semibold text-shadow-sm'>
       something <br />{' '}
       <ContainerTextFlip
        words={['extraordinary', 'amazing', 'beautiful']}
        className=''
       />
       <br /> <span className='text-5xl md:text-7xl '>is on its way</span>{' '}
      </h1>
      <p className='mt-6 text-center text-lg font-montserrat text-shadow-sm'>
       An extraordinary artistic journey from the heart of Sri Lanka.{' '}
       <br className='hidden md:block' /> Be a part of something special.
      </p>
      {/* newsletter */}
      <div className='mt-10 md:mt-20 flex flex-col md:flex-row items-center gap-3 '>
       <form onSubmit={handleSubmit}>
        <Input
         type='email'
         value={email}
         placeholder='Enter your email here'
         onChange={(e) => setEmail(e.target.value)}
         className='hidden md:block  h-8 w-80 font-montserrat text-primary-black placeholder:text-primary-black/40 focus:shadow-md focus-visible:ring-1
         focus-visible:ring-primary-black ring ring-primary-black/30'
        />
        <input
         type='email'
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         className='md:hidden px-2 md:px-3 py-1 w-80 md:w-96 rounded-md font-montserrat text-secondary-white md:text-primary-black border
        md:border-2 border-secondary-white/40 backdrop-blur-[1px] focus:backdrop-blur-sm md:border-primary-black/40 shadow-sm
       placeholder:text-secondary-white/50 md:placeholder:text-primary-black/30 focus:outline-none focus:border-primary-black focus:shadow-md duration-300 '
         placeholder='Enter your email here '
        />

        <Button
         type='submit'
         containerClassName='h-10 w-32 flex items-center justify-center rounded-lg'
         borderClassName='h-2 w-4 bg-[radial-gradient(#ffffff,transparent)] opacity-70 md:h-10 md:w-10 '
         borderRadius='rounded-md'
         className='h-8 w-30 flex items-center gap-2 bg-secondary-white/30  md:bg-primary-black backdrop-blur-[2px] border border-secondary-white/30 
       md:border-primary-black/95 text-secondary-white px-2 md:px-3 py-0.5 md:py-1 rounded-md font-montserrat hover:bg-secondary-white/40 md:hover:bg-primary-black hover:shadow-md duration-300'
        >
         <IoIosMail />
         Notify Me
        </Button>
       </form>
      </div>
      {/* socials */}
      <div className='flex items-center gap-2 mt-10 text-xl md:text-2xl'>
       <LinkPreview url='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/450px-Facebook_icon_2013.svg.png?20161223201621'>
        <FaFacebook />
       </LinkPreview>
       <a href='#'>
        <RiInstagramFill />
       </a>
       <a href='#'>
        <FaYoutube />
       </a>
       <a href='#'>
        <BsTwitterX />
       </a>
       <a href='#'>
        <AiFillTikTok />
       </a>
       <a href='#'>
        <FaSpotify />
       </a>
       <a href='#'>
        <SiApplemusic />
       </a>
      </div>
     </div>
     <div className=' bg-[url(./assets/bg2.png)] bg-center bg-cover min-h-screen hidden md:block'></div>
    </div>
   </div>
  </>
 );
}

export default App;
