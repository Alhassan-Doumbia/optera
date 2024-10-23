import React from 'react'
import TotalCallCard from '../../Components/DataCard/TotalCallCard'
import AverageTimeCard from '../../Components/DataCard/AverageTimeCard'
import Table from '../../Components/Table/Table'
import OpsEvoChart from '../../Components/charts/OpsEvoChart'
function StatView() {
  return (
    <>
         <section id="content" className="w-full h-full flex flex-col gap-[30px] pl-4 pt-4 border-red-500">
            <h1 className="font-title text-content text-[24px] font-semibold">
                Statistiques 
            </h1>
            <div className='w-full flex gap-8 '>
                <TotalCallCard></TotalCallCard>
                <AverageTimeCard></AverageTimeCard>
            </div>
            <h2 className="font-semibold text-[20px] text-content font-title">
                  Performance des opérateurs 
            </h2>
            <div className='w-full'>
              <Table></Table>
            </div>
            <h2 className="font-semibold text-[20px] text-content font-title">
                  Evolution des opérateurs 
            </h2>
            <div>
                <OpsEvoChart></OpsEvoChart>
            </div>


          </section>
    </>
  )
}

export default StatView