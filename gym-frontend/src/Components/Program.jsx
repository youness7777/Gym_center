import React from 'react'
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

export const Program = () => {
    const programs = [
        {
          title: "Cardio Strength",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
          icon: "❤️",
          isActive: true,
        },
        {
          title: "Fat Lose",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
          icon: "🦴",
          isActive: false,
        },
        {
          title: "Muscle Gain",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
          icon: "💪",
          isActive: false,
        },
        {
          title: "Nutrition Plan",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
          icon: "🥗",
          isActive: false,
        },
        {
            title: "Nutrition Plan",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
            icon: "🥗",
            isActive: false,
        },
      ];
  return (
    <div className='relative text-white bg-[#090707] w-full h-auto text-left   py-24 md:flex-row'>
        <div className='flex justify-between px-24'>
            <div className=''>
                <p className=' text-[56px] font-bold '>Explore Our Programs</p>
                <p className='absolute text-[142px] text-white opacity-10 font-bold top-0 left-0 '>Programs</p>
            </div>

            <div className="flex justify between  text-white  cursor-pointer ">
                <ArrowCircleLeftRoundedIcon style={{ fontSize: '68px'}} className='hover:scale-150 duration-500'/>
            
                <ArrowCircleRightRoundedIcon color='primary' className='hover:scale-150 duration-500'  style={{ fontSize: '68px' }}/>

            </div>
        </div>
        <div className='  '>
            <div className='grid  overflow-x-auto gap-8 justify-center md:gap-[344px] px-14 py-10   md:grid-cols-5 sm:grid-cols-1'>
                {programs.map((program, index) => (
                <div
                key={index}
                className='flex-shrink-0 w-[320px] h-[240px]  items-center py-10 px-6 rounded-xl bg-[#0D0D0D] hover:bg-[#097FD9] scale-105 duration-300' 
              
                >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-white text-xl font-semibold font-poppins text-[24px] leading-[24px] mb-2">{program.title}</h3>
                <p className="text-white/70 text-sm">{program.description}</p>
                </div>
               ))}

            </div>

        </div>
    </div>
  )
}
