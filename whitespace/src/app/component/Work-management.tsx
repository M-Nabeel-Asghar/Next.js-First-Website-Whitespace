import React from 'react';
import Image from 'next/image';
import circle from '../assest/images/Work.png'


const Work = () => {
  return (
    <div className='bg-white h-[1150px] w-screen '>
          <div className='h-[650px] w-screen py-[100px] px-[150px] inset-x-[92px] flex items-center '>
            <div className="w-[500px] h-[300px] py-[30px] text-black">
                <h1 className="text-5xl font-bold leading-[60px]">Project Management</h1>
                <p className="text-[14px] mt-5">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                <button className="bg-[#4F9CF9] p-4 rounded-lg mt-[50px] text-white">Get Started &rarr;</button>
            </div>
            <div className="h-[400px] w-[550px] ml-7 bg-[#C4DEFD] flex items-center"> </div>
          </div>
          <div className='w-screen px-[150px] inset-x-[92px] flex items-center gap-x-[100px]'>
          <Image src={circle} alt='circle' className='w-[450px] h-[400px]'/>
            <div className="w-[500px] h-[300px] text-black">
                <h1 className="text-5xl font-bold leading-[60px]">Work together</h1>
                <p className="text-[14px] mt-5">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
                <button className="bg-[#4F9CF9] p-4 rounded-lg mt-[50px] text-white">Try it now &rarr;</button>
            </div>
          </div>
    </div>
    
  );
};

export default Work;