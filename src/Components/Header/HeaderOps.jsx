import React from 'react'
import logo from '../../assets/logoOptera.png'
import { FiLogOut } from "react-icons/fi";
function HeaderOps() {
  return (
   <>
        <header className='w-full h-fit drop-shadow-lg flex items-center justify-between text-content '>
           <img src={logo} alt="Logo de optera" className='cursor-pointer'  />
           <nav className='flex justify-between items-center '>
              <ul className='flex font-semibold items-center justify-center w-fit gap-2 font-content text-titles text-[12px]'>
                <li className='cursor-pointer px-3 py-3  hover:bg-negative hover:bg-opacity-20 hover:rounded-xl hover:text-negative hover: ease-linear hover: transition-colors'>Tableau de bord </li>
                <li className='cursor-pointer px-3 py-3 hover:bg-negative hover:bg-opacity-20 hover:rounded-xl hover:text-negative hover: ease-linear hover: transition-colors '>Session de travail </li>
              </ul>
           </nav>
           <div id='logout' className='flex gap-1 font-semibold text-[12px] text-title items-center h-full w-fit'>
                  <p className='hover:text-negative hover:transition-color hover:duration-100'> Se déconnecter </p>
                  {/* Surement à modifier et y mettre un lien à la place  */}
                  <FiLogOut className='text-[16px] text-negative'></FiLogOut>
           </div>
        </header>
   </>
  )
}

export default HeaderOps