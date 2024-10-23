import React from 'react';
import HeaderAdmin from '../../../Components/Header/HeaderAdmin';
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdStats } from 'react-icons/io';
import { Link, Outlet } from 'react-router-dom';
import DashboardRoutes from '../../../Routes/DashBoardRoutes';

function DashBoardView() {
  return (
    <section className="w-svw min-h-svh h-fit bg-white px-[40px]">
      <HeaderAdmin />
      <main className="h-full w-full flex">
        {/* Sidebar */}
        <section id="sideBar" className="w-[300px] h-svh py-5 border-r-[0.5px] flex flex-col justify-between">
          <nav>
            <ul className="flex flex-col font-semibold items-center justify-center w-full gap-2 font-content text-titles text-[14px]">
              <li className="cursor-pointer items-center gap-2 flex w-full px-3 py-3 hover:bg-negative hover:bg-opacity-20 hover:rounded-md hover:text-negative transition-colors ease-linear">
                <MdSpaceDashboard />
                <Link to="overview">Tableau de bord</Link>
              </li>
              <li className="cursor-pointer items-center gap-2 flex w-full px-3 py-3 hover:bg-negative hover:bg-opacity-20 hover:rounded-md hover:text-negative transition-colors ease-linear">
                <IoMdStats />
                <Link to="stats">Statistiques</Link>
              </li>
            </ul>
          </nav>
        </section>

        {/* Content area for nested routes */}
        <section className="w-full ml-6 h-full">
          <Outlet />  {/* Renders the component based on the nested route */}
          <DashboardRoutes />  {/* Gère les routes imbriquées */}
        </section>
      </main>
    </section>
  );
}

export default DashBoardView;
