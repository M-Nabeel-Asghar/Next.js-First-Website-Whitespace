import React from 'react';

const Customise = () => {
  return (
    <div className="w-screen h-[550px] bg-white inset-x-[92px] py-[150px] px-[100px] flex items-center gap-x-28 text-black">
        <div className="h-[400px] w-[530px] ml-7 bg-[#C4DEFD] flex items-center"> </div>
        <div className="w-[450px] h-[300px] ">
        <h1 className="text-5xl font-bold leading-[60px]">Customise it to your needs</h1>
        <p className="text-[14px] mt-5">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
        <button className="bg-[#4F9CF9] p-4 rounded-lg mt-[50px]">Lets Go &rarr;</button>
        </div>
    </div>
  );
};

export default Customise;