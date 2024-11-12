import React from 'react';
import Image from 'next/image';
import Apple from '../assest/images/Apple.png'
import Microsoft from '../assest/images/Microsoft.png'
import Slack from '../assest/images/Slack.png'
import Google from '../assest/images/Google.png'

const Our = () => {
  return (
    <div className='w-screen h-[400px] bg-white py-[100px] px-[120px] text-black flex flex-col items-center'>
            <div className=''>
            <h1 className='text-5xl font-bold leading-[60px] text-center'>Our Sponsors</h1>
            </div>
            <div className='flex justify-between h-[71px] w-[1200px] mt-20'>
              <Image src={Apple} alt='Apple'/>
              <Image src={Microsoft} alt='Microsoft' />
              <Image src={Slack} alt='Slack' />
              <Image src={Google} alt='Google' />

            </div>

          
    </div>
  );
};

export default Our;