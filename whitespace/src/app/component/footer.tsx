import React from 'react';
import Image from 'next/image';
import Logo from '../assest/images/Logo.png'
const Footer = () => {
  return (
    <div className='w-screen h-[300px] bg-[#043873] px-[100px] pt-[60px] pb-[20px] flex flex-col justify-between font-sans'>
    <div className='flex items-center gap-[74px]'>
      <div className='w-[210px] h-[169px]'>
        <Image src={Logo} alt='footer-logo' width={150} height={25} />
        <p className='mt-3'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
      </div>
      <div className='w-[210px] h-[169px] space-y-1'>
        <h1 className='font-bold'>Product</h1>
        <p>Overview</p>
        <p>Pricing</p>
        <p>Customer stories</p>
      </div>
      <div className='w-[210px] h-[169px] space-y-1'>
        <h1 className='font-bold'>Resources</h1>
        <p>Blog</p>
        <p>Guides & tutorials</p>
        <p>Help center</p>
      </div>
      <div className='w-[210px] h-[169px] space-y-1'>
        <h1 className='font-bold'>Company</h1>
        <p>About us</p>
        <p>Careers</p>
        <p>Media kit</p>
      </div>
    </div>
    <h1 className='border-t-[1px] border-t-[#2E4E73] text-center mt-auto'>Muhammad Nabeel © 2021 Whitepace LLC.</h1>
  </div>
  );
};

export default Footer;