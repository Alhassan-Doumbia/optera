import React from "react";
import clsx from "clsx";

function CampaignEvo({ name, designation, objective = 1, evolution = 0, average_duration_per_call = 0 }) {
  // Fonction pour calculer le pourcentage d'évolution
  const evo_percentage = (max, current) => {
    return (current * 100) / max;
  };
  // Calcul de l'évolution en pourcentage
  let evolutionPercentage = evo_percentage(objective, evolution);
  return (
    <section
      id="container"
      className="drop-shadow-md flex font-content bg-transparent  w-fit h-fit rounded-lg py-4 gap-4"
    >
      {/* Colonne pour les détails de la campagne */}
      <div className="flex-col gap-3">
        <div id="denomination" className="mb-2 font-content text-sm">
          <p className="font-semibold text-content">
            {name} - {designation}
          </p>
        </div>

        {/* Evolution chart */}
        <div id="evolution-chart" className="flex gap-4 items-center">
          <div
            className={clsx(
              "h-[20px] w-[300px] rounded-2xl transition-all duration-300 bg-opacity-40 overflow-hidden",
              evolutionPercentage <= 40 && "bg-negative",
              evolutionPercentage > 40 && evolutionPercentage <= 80 && "bg-yellow-500",
              evolutionPercentage > 80 && "bg-green-500"
            )}
          >
            <div
              className={clsx(
                "h-full rounded-2xl transition-all duration-500 bg-opacity-40",
                evolutionPercentage <= 40 && "bg-negative",
                evolutionPercentage > 40 && evolutionPercentage <= 80 && "bg-yellow-500",
                evolutionPercentage > 80 && "bg-green-500"
              )}
              style={{ width: `${evolutionPercentage}%` }}
            >
              &nbsp;
            </div>
          </div>
          <p className="font-semibold text-sm text-content">{evolutionPercentage.toFixed(2)}%</p>
        </div>

        {/* Détails supplémentaires */}
        <div className="mt-4">
          <p className="text-[12px] font-semibold">
            Taux de progression:{" "}
            <span className="font-normal">{evolutionPercentage.toFixed(2)}%</span>
          </p>
          <p className="text-[12px] font-semibold">
            Temps d'appel moyen:{" "}
            <span className="font-normal">{average_duration_per_call} secondes</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default CampaignEvo;
