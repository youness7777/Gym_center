import React from 'react'
import hero_picture from '../Assets/pngwing 5.png'
import ellipse_1 from '../Assets/Ellipse 1.png'
import ellipse_2 from '../Assets/Ellipse 2.png'
import ellipse_3 from '../Assets/Ellipse 3.png'




export const Hero = () => {
  return (
    <div className='flex flex-col items-center px-24 justify-between w-full h-auto bg-[#090707]  font-signature text-white overflow-hidden md:h-screen lg:h-screen md:flex-row'>
        <div className=' max-w-screen-lg flex flex-col text-[64px] font-bold md:text-left py-8 '>
            <p>Helps for your ideal body fitness</p>
            <p className='text-[18px]  font-medium  text-white/50 py-6 md:py-2'>Motivate users with benefits and positive reinforcement, and offer modifications and progress tracking.</p>

            <button className="bg-[#097FD9] w-fit mx-auto text-white  px-4 py-1 rounded-xl hover:bg-transparent text-[18px] font-semibold font-poppins leading-[40px] opacity-100 hover:text-white  duration-300">
                Abonnez-vous
            </button>
        
        </div>

        <div className='relative flex items-center justify-center mx-auto md:mt-60'>
            <p className='text-[142px] text-white opacity-10 font-bold  rotate-[-90deg] -translate-y-40 '>Fitness</p> 

            <img src={hero_picture}  className='max-w-full h-auto -translate-x-60 '></img>

            <div className='absolute flex flex-col top-10  right-0'>
              <div className='flex '>
                <img  src={ellipse_1}  className=''></img>
                <img src={ellipse_2}  className='-translate-x-6'></img>
                <img src={ellipse_3}  className='-translate-x-12'></img>
              </div>  
                <p className='text-white text-left font-medium py-6'>10K+ Satisfied Customer</p>
          </div>
          
            
        </div>

       
       
       
       
        
        
    </div>
  )
}
