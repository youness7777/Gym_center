import React from 'react'

export const Navbar = () => {
  const links=[
    {
        id:1,
        link:'Accueil'
      },
      {
        id:2,
        link:'À propos de Nous'
      },
      {
        id:3,
        link:'Nos Coachs'
      },

  ]

  return (
    <div className='flex justify-between items-center px-24   text-white h-[94px] w-full bg-[#090707] font-signature'>
        <div className='text-2xl '>
            YOUNESS
        </div>
        <div className='flex items-center'>
            <ul className='flex px-8'>
                {links.map(({link,id})=>(
                        
                    <li className=' text-base px-2 font-medium cursor-pointer hover:scale-105 duration-500' key={id}>{link}</li>

                ))}
            </ul>

            <div className="flex space-x-4">
            <button className="bg-transparent border border-white px-4 py-1 rounded-xl text-[18px] font-semibold font-poppins leading-[40px] opacity-100 hover:bg-white hover:text-black duration-300">
            S'inscrire
            </button>
            <button className="bg-[#097FD9] text-white px-4 py-1 rounded-xl hover:bg-transparent text-[18px] font-semibold font-poppins leading-[40px] opacity-100 hover:text-white  duration-300">
            Se connecter
            </button>
        </div>
      </div>        
    </div>
  )
}
