import React from 'react';

const  Extension= () => {
  return (
    <div className="w-screen h-[550px] bg-[#043873] inset-x-[92px] py-[150px] px-[150px] flex items-center gap-x-12">
    <div className="w-[500px] h-[300px] py-[40px]">
        <h1 className="text-5xl font-bold leading-[60px]">Use as Extension</h1>
        <p className="text-[14px] mt-5">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
        <button className="bg-[#4F9CF9] p-4 rounded-lg mt-[50px]">Lets Go &rarr;</button>
    </div>
    <div className="h-[350px] w-[470px] ml-7 bg-[#C4DEFD] flex items-center"> </div>
    </div>
  );
};

export default Extension;