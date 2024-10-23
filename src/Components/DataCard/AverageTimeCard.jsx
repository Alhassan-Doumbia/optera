import React from "react";
import { IoTime } from "react-icons/io5";

function AverageTimeCard({ metrics = "blabla" }) {
  const measurementValue = 3000;
  const evolutionRate = 10;

  return (
    <>
      <section
        id="dataCard"
        className="cursor-pointer min-w-[320px] min-h-[100px] h-fit w-fit bg-card-bg drop-shadow-md rounded-xl font-content flex px-[20px] py-2 gap-2 
        transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      >
        <div
          id="cardDatas"
          className="min-h-[100px] h-fit w-[240px] flex flex-col justify-between"
        >
          <p id="cardTitle" className="text-sm text-subtitles font-title ">
            Temps moyens par appel
          </p>

          <p
            id="Amount"
            className="font-content text-titles text-[26px] font-bold"
          >
            {measurementValue} {metrics}
          </p>

          <div
            id="evolution"
            className={`text-sm text-subtitles font-title flex gap-2 ${
              evolutionRate >= 0 ? "text-positive" : "text-negative"
            } `}
          >
            {/* <p id="evo-icon">evo</p>
            <p id="evolutionRate" className="text-[14px]">
              {evolutionRate} %
            </p> */}
          </div>
        </div>
        <div
          id="cardIcon"
          className="w-[50px] h-[50px] flex items-center justify-center bg-negative rounded-xl bg-opacity-20"
        >
          <IoTime className="text-[25px] text-negative"></IoTime>
        </div>
      </section>
    </>
  );
}

export default AverageTimeCard;
