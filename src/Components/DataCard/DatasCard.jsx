import React from "react";

function DatasCard({ metrics = "Total Appel traités" }) {
  const measurementValue = 3000;
  const evolutionRate = 10;

  return (
    <>
      <section
        id="dataCard"
        className="min-w-[320px] min-h-[140px] h-fit w-fit bg-card-bg drop-shadow-md rounded-xl  font-content flex justify-between px-[20px] py-2 gap-2"
      >
        <div
          id="cardDatas"
          className="min-h-[100px]h-fit w-[240px] flex flex-col justify-between"
        >
          <p id="cardTitle" className="text-sm text-subtitles font-title ">
            Total appels Traités
          </p>

          <p
            id="Amount"
            className="font-content text-titles text-[26px] font-semibold"
          >
            {measurementValue} {metrics}
          </p>

          <div
            id="evolution"
            className={`text-sm text-subtitles font-title flex gap-2 ${
              evolutionRate >= 0 ? "text-positive" : "text-negative"
            } `}
          >
            <p id="evo-icon">evo</p>
            <p id="evolutionRate" className="text-[14px]">
              {evolutionRate} %
            </p>
          </div>
        </div>
        <div
          id="cardIcon"
          className="w-[50px] h-[50px] flex items-center justify-center bg-slate-500 rounded-xl bg-opacity-40"
        ></div>
      </section>
    </>
  );
}

export default DatasCard;
