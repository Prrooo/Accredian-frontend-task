import React, { useState } from 'react'

const SlideBar = () => {
  const [activeButton,setActiveButton]=useState(0);

  const handleButtonClick=(index)=>{
    setActiveButton(index);
  }
  return (
    <div className='bg-primary-color-bg w-2/4 h-14 mx-auto my-10 rounded-[38px] flex justify-evenly items-center text-xl'>
        <button
        className={`${activeButton === 0 ? 'text-[#1A73E8]' : 'text-black'}`}
        onClick={()=>{handleButtonClick(0)}}
      >
        <a href='#'>Refer</a>
        <div className={`${activeButton===0 ? 'bg-[#1A73E8] w-1 h-1 m-auto rounded-full mt-1':''}`}></div>
      </button>       
        <button
         className={`${activeButton === 1 ? 'text-[#1A73E8]' : 'text-black'}`}
         onClick={()=>{handleButtonClick(1)}}
        >
          <a href='#'>Benefits</a>  
          <div className={`${activeButton===1 ? 'bg-[#1A73E8] w-1 h-1 m-auto rounded-full mt-1':''}`}></div>
        </button>
        <button
         className={`${activeButton === 2 ? 'text-[#1A73E8]' : 'text-black'}`}
         onClick={()=>{handleButtonClick(2)}}
        >
          <a href='#'>FAQs</a>
          <div className={`${activeButton===2 ? 'bg-[#1A73E8] w-1 h-1 m-auto rounded-full mt-1':''}`}></div>
        </button>
        <button
         className={`${activeButton === 3 ? 'text-[#1A73E8]' : 'text-black'}`}
         onClick={()=>{handleButtonClick(3)}}
        >
          <a href='#'>Support</a>
          <div className={`${activeButton===3 ? 'bg-[#1A73E8] w-1 h-1 m-auto rounded-full mt-1':''}`}></div>
        </button>
    </div>
  )
}

export default SlideBar