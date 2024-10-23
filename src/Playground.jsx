import React from 'react'
import DatasCard from './Components/DataCard/DatasCard'
import LeaderBoard from './Components/LeaderBoard/LeaderBoard'
import ProfileComp from './Components/LeaderBoard/ProfileComp'
import HeaderOps from './Components/Header/HeaderOps'
import HeaderAdmin from './Components/Header/HeaderAdmin'
import SideBar from './Components/SideBar/SideBar'
import LoginView from './Views/LoginView/LoginView'
import Footer from './Components/Footer/Footer'
import CampaignEvo from './Components/charts/CampaignEvo'


import DashBoardView from './Views/DashboardView/DashBoardV/DashBoardView'
function Playground() {
  return (
   <>
        <section className='w-svw h-svh  gap-4 flex flex-col items-center justify-center'>
                <DatasCard></DatasCard>
                <LeaderBoard></LeaderBoard>
                <ProfileComp></ProfileComp>
        </section>
        <section className='px-[20px] w-svw min-h-svh h-fit py-5 gap-3'>
              <h1>Header Ops Zone</h1>
                  <HeaderOps></HeaderOps>
              <h1>Header Admin Zone </h1>
                  <HeaderAdmin></HeaderAdmin>

              <h1> Admin Sidebar </h1>
              <SideBar></SideBar>
              <h1>Les charts</h1>
              <p>Evolution campagne</p>
              <CampaignEvo></CampaignEvo>

              <p>Diagrramme en Bande evolution temps moyen par appel </p>
              {/* <SuccesRateChart></SuccesRateChart> */}
              
        </section>

        <DashBoardView></DashBoardView>

   </>
  )
}

export default Playground