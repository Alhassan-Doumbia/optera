import React, { useRef, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import {updateBarCharts} from "../../hooks/handleUpdateChart";
import { updateCurveChart } from "../../hooks/handleUpdateChart";
function OpsEvoChart() {
  const barChartRef = useRef(null);
  const curveChartRef=useRef(null);
  const searchRef = useRef(null);
  // Ajouter un state pour gérer la recherche
  const [searchTerm, setSearchTerm] = useState("abouo");
  const [barChartData, setBarChartData] = useState(null);
  const[curveChartData,setCurveChartData]=useState(null);
  // Mettre à jour les données lorsque le searchTerm change
  useEffect(() => {
    const barData = updateBarCharts(searchTerm);
    const curveData=updateCurveChart(searchTerm)
    setBarChartData(barData);
    setCurveChartData(curveData);
  }, [searchTerm]); // Dépendance sur searchTerm

  const barChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const curveChartOption={
    scales:{
      y:{
        beginAtZero:true
      }
      
    }
  }


  /**
   * Fonctionnalité à coder : 
   * - Definir des choix pour afficher les données sln des intervales de temps défini (Aujourd"hui ; il ya une semaine ; Il ya un mois);
        On va reecrir la fonction qui met à jour deux fois selon les intervalles qu'on aura defini ,sauf qu'on va integrer des données par defaut 
        au lieu de faire des .map 
  
  */
  return (
    <section className="w-full h-fit  flex flex-col gap-2">
      <form action="#" className="flex w-[700px] gap-2 h-fit  items-center">
        <input
          type="text"
          id="textInput"
          ref={searchRef}
          className="focus:border-[#0D0D0] focus:transition-colors focus:duration-150 text-[#0D0D0D] bg-white w-[500px] h-[50px] border-[1px] border-gray-200 rounded-lg py-2 px-2 font-content text-[13px] placeholder:text-[13px] placeholder:font-content"
          placeholder="Entrez votre recherche "
          autoComplete="off"
        />
        <button
          type="button"
          onClick={() => {
            const searchValue = searchRef.current.value;
            setSearchTerm(searchValue); // Mettre à jour le state de recherche
            searchRef.current.value = ""; // Effacer l'input
          }}
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-gray-200 text-titles font-title text-[14px] hover:bg-primary hover:text-slate-50 border-none"
        >
          Rechercher
        </button>
      </form>

      <div className="flex w-full h-[300px]  justify-center gap-2">
        <div  className=" w-[50%] h-full text-content font-content bg-white rounded-lg px-3 py-3">
          {/* {chartData && <Bar ref={chartRef} data={chartData} options={options} />} */}
          {
            barChartData?<Bar ref={barChartRef} data={barChartData} options={barChartOptions} />:<p>Aucune données trouvées pour {searchTerm}</p>
          }
        </div>
        <div  className="w-[50%] h-full text-content font-content bg-white rounded-lg px-3 py-3">
          {/* {chartData && <Bar ref={chartRef} data={chartData} options={options} />} */}
          {
            barChartData?<Line ref={curveChartRef} data={curveChartData} options={curveChartOption} />:<p>Aucune données trouvées pour {searchTerm}</p>
          }
        </div>
      </div>
    </section>
  );
}

export default OpsEvoChart;
