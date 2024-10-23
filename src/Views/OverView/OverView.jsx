import React from 'react'
import LeaderBoard from '../../Components/LeaderBoard/LeaderBoard';
import CampaignEvo from '../../Components/charts/CampaignEvo';
import data from '../../Components/charts/CampaignChartDatas.json';
import DatasCard from '../../Components/DataCard/DatasCard';
import TotalCallCard from '../../Components/DataCard/TotalCallCard';
import ObjectiveCard from '../../Components/DataCard/ObjectiveCard';
import AverageTimeCard from '../../Components/DataCard/AverageTimeCard';
import Table from '../../Components/Table/Table';
function OverView() {
  return (
    <>
        <section id="content" className="w-full h-full  pl-4 pt-4">
            <h1 className="font-title text-content text-[24px] font-semibold">
              Vue d'ensemble
            </h1>
            <div id='global data' className='mt-[50px]'>
                <h2 className="font-semibold text-[20px] text-content font-title">Données globales</h2>
                <div className='w-full h-fit flex gap-8 mt-[30px]'>
                    {/* <DatasCard></DatasCard> */}
                    <TotalCallCard></TotalCallCard>
                    <ObjectiveCard></ObjectiveCard>
                    <AverageTimeCard></AverageTimeCard>
                </div>

              </div>
            <div id="sub-section" className="flex w-full min-h-[400px] mt-[50px] h-fit">
              <div
                id="leaderboard"
                className="flex flex-col gap-2 font-title w-[50%] py-3 "
              >
                <h2 className="font-semibold text-[20px] text-content">
                  Classement
                </h2>
                <LeaderBoard></LeaderBoard>
              </div>
              <div
                id="campaign-evolution"
                className="font-content w-[50%] py-3  flex flex-col gap-[10px]"
              >
                <h2 className="font-semibold text-[20px] text-content font-title">
                  Evolution des campagnes
                </h2>
                <div className="w-full h-[400px] overflow-scroll">
                  {data.map((item, index) => {
                    return (
                      <CampaignEvo
                        key={index}
                        name={item.name}
                        designation={item.designation}
                        objective={item.objective}
                        evolution={item.evolution}
                        average_duration_per_call={item.average_duration_per_call}
                      />
                    );
                  })}
                </div>
              </div>
           
            </div>
            <Table></Table>
          </section>
    
    </>
  )
}

export default OverView