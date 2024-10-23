import React from 'react'
import logo from '../../assets/logoOptera.png'
import { FiLogOut } from "react-icons/fi";
function HeaderAdmin() {
    return (
        <>
             <header className='w-full h-fit drop-shadow-lg flex  items-center justify-between text-content border-b-[0.5px]'>
                <img src={logo} alt="Logo de optera" className='cursor-pointer'  />
                
                <div id='logout' className='flex gap-1 font-semibold text-[12px] text-title items-center h-full w-fit'>
                       <p className='hover:text-negative hover:transition-color hover:duration-100'> Se déconnecter </p>
                       {/* Surement à modifier et y mettre un lien à la place  */}
                       <FiLogOut className='text-[16px] text-negative'></FiLogOut>
                </div>
             </header>
        </>
       )
}

export default HeaderAdmin