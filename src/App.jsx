import './App.css';
import { IoIosMail } from 'react-icons/io';
import { FaFacebook, FaYoutube, FaSpotify } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { BsTwitterX } from 'react-icons/bs';
import { SiApplemusic } from 'react-icons/si';
import { AiFillTikTok } from 'react-icons/ai';

function App() {
 return (
  <div
   className='bg-[url(./assets/bg1.png)] bg-cover bg-center bg-black/40 bg-blend-overlay md:bg-none 
   md:bg-secondary-white min-h-screen overflow-y-auto scroll-smooth'
  >
   <div className='relative grid grid-cols-1 md:grid-cols-2 min-h-screen overflow-hidden'>
    <div className='text-secondary-white md:text-primary-black flex flex-col justify-center items-center overflow-y-auto p-5'>
     {/* heading */}
     <h1 className='uppercase text-3xl md:text-5xl text-center font-playfair font-semibold text-shadow-sm'>
      something <br /> extraordinary <br />{' '}
      <span className='text-5xl md:text-7xl'>is on tis way</span>{' '}
     </h1>
     <p className='mt-6 text-center text-lg font-montserrat text-shadow-sm'>
      An extraordinary artistic journey from the heart of Sri Lanka.{' '}
      <br className='hidden md:block' /> Be a part of something special.
     </p>
     {/* newsletter */}
     <div className='mt-10 md:mt-20 flex flex-col md:flex-row items-center gap-2 '>
      <input
       type='email'
       id='email'
       className='px-3 py-1 w-72 md:w-96 rounded-md font-montserrat text-secondary-white md:text-primary-black border
        md:border-2 border-secondary-white/40 backdrop-blur-[1px] focus:backdrop-blur-sm md:border-primary-black/40 shadow-sm
       placeholder:text-secondary-white/50 md:placeholder:text-primary-black/30 focus:outline-none focus:border-primary-black focus:shadow-md duration-300 '
       placeholder='Enter your email here '
      />
      <button
       className='flex items-center gap-2 bg-secondary-white/30  md:bg-primary-black/85 backdrop-blur-[2px] border border-secondary-white/30 
       md:border-primary-black/95 text-secondary-white px-3 py-1 rounded-md font-montserrat hover:bg-secondary-white/40 md:hover:bg-primary-black hover:shadow-md duration-300'
      >
       <IoIosMail />
       Notify Me
      </button>
     </div>
     {/* socials */}
     <div className='flex items-center gap-2 mt-10 text-2xl'>
      <a href='#'>
       <FaFacebook />
      </a>
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
    <div className='bg-[url(./assets/bg2.png)] bg-center bg-cover min-h-screen hidden md:block'></div>
   </div>
  </div>
 );
}

export default App;
