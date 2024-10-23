import React from "react";
import data from "../LeaderBoard/profile.json";
function Table() {
  return (
    <>
      <table className="w-full table-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr className="text-left text-gray-600 font-semibold">
            <th className="px-4 py-3">Nom de l'opérateur</th>
            <th className="px-4 py-3">Temps moyen par appel</th>
            <th className="px-4 py-3">Nombre d'appels traités</th>
            <th className="px-4 py-3">Taux de réussites</th>
          </tr>
        </thead>
        <tbody>
            {
                data.map((item, index) => {
                    return(
                        <tr key={index} className="border-b border-gray-300 hover:bg-gray-100 transition-colors duration-200">
                        <td className="px-4 py-3">{item.name}</td>
                        <td className="px-4 py-3">{item.temps_moyen_par_appel}</td>
                        <td className="px-4 py-3">{item.calls_handled}</td>
                        <td className="px-4 py-3">2.00</td>
                      </tr>
                    )
                })
            }
         
          {/* Ajoute d'autres lignes ici */}
        </tbody>
      </table>
    </>
  );
}

export default Table;
