
import React from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdStats } from 'react-icons/io';
function SideBar() {
  return (
    <>
        <section id='sideBar' className='w-[300px] h-svh py-5  border-r-[0.5px] flex flex-col justify-between'>
            <nav>
                {/* Liens de navigations entre les fonctionnalités  */}
                <ul className='flex flex-col  font-semibold items-center justify-center w-full gap-2 font-content text-titles text-[14px]'>
                    <li className='cursor-pointer items-center gap-2 flex w-full px-3 py-3  hover:bg-negative hover:bg-opacity-20 hover:rounded-md hover:text-negative hover: ease-linear hover: transition-colors' ><span><MdSpaceDashboard/> </span>Tableau de bord </li>
                    <li className='cursor-pointer items-center flex gap-2 w-full px-3 py-3  hover:bg-negative hover:bg-opacity-20 hover:rounded-md hover:text-negative hover: ease-linear hover: transition-colors'><span><IoMdStats/></span>Statistiques</li>
                </ul>

            </nav>
        </section>
    </>
  )
}

export default SideBar