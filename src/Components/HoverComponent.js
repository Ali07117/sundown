import React from 'react';

function HoverComponent(props) {
  return (
    <>
         <div className="elem overflow-hidden flex justify-between items-center  relative border-b border-[#d3adad] py-[20px]">
     <div className="elem-layer h-[100%] w-[100%] absolute translate-y-[-100%] z-[-1] duration-200  bg-[#FF9831]"></div>
     <span className='flex justify-between items-center w-[100%] px-[30px]'>
     <p className='text-[55px] hover-text font-[700]'>{props.title}</p>
     <span className='flex flex-col items-end text-right'>
      <p className='hover-text-brand'>{props.brand}</p>
      <p className='text-[#00000066] hover-text-brand'>{props.text}</p>
      </span>
     </span>
     </div>
    </>
  );
}

export default HoverComponent;
